"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  /* const [post, setPost] = useState({
    title: "",
    desc: "",
    img: "",
    content: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }; */

  const session = useSession();

  const router = useRouter();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (session.status === "authenticated")
    return (
      <div className="flex gap-20 items-center">
        <div className="flex-1">
          {isLoading
            ? "Loading"
            : data?.map((post) => (
                <div
                  key={post._id}
                  className="flex items-center my-12 justify-between rounded-lg bg-green-100 p-4"
                >
                  <Link
                    href={`/blog/${post._id}`}
                    className="flex items-center gap-5"
                  >
                    <div className="w-[200px] h-[100px] relative">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill={true}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                  </Link>
                  <span
                    className="cursor-pointer text-red-700"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex-1 flex-col gap-5 flex" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className="create_post_form_input"
          />
          <input
            type="text"
            placeholder="Desc"
            className="create_post_form_input"
          />
          <input
            type="text"
            placeholder="Image"
            className="create_post_form_input"
          />
          <textarea
            placeholder="Content"
            className="create_post_form_input"
            cols="30"
            rows="10"
          ></textarea>
          <button className="green_btn">Send</button>
        </form>
      </div>
    );
};

export default Dashboard;
