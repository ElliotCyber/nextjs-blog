import Post from "@/components/Post";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return notFound();
  }

  return response.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  const { title, desc, img, content, username } = data;
  return (
    <div className="min-h-screen my-16">
      <Post
        title={title}
        desc={desc}
        img={img}
        content={content}
        username={username}
      />
    </div>
  );
};

export default BlogPost;
