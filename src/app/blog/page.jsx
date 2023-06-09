import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      {data.length ? (
        <div className="my-12">
          {data.map((item) => (
            <Link
              href={`/blog/${item._id}`}
              className="flex items-center gap-12 mb-12"
              key={item.id}
            >
              <Image
                src={item.img}
                alt="blog image"
                width={300}
                height={200}
                className="object-covert"
              />
              <div className="flex-1">
                <div className="flex-col justify-start">
                  <h1 className="mb-1.5 text-3xl font-semibold">{item.title}</h1>
                  <p className="text-[#999] text-[18px]">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="items-center flex justify-center text-3xl font-semibold">
          No Blog post available
        </h1>
      )}
    </>
  );
};

export default Blog;
