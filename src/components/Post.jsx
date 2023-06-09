"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Post = ({ title, desc, img, content, username }) => {
  const session = useSession();

  return (
    <>
      <div className="flex gap-10 min-h-full">
        <div className="flex-1 flex-col flex justify-between">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-lg text-gray-600 font-[300] text-justify">
            {desc}
          </p>
          <div className="flex items-center gap-2.5">
            <Image
              src={session?.data?.user?.image}
              width={37}
              height={37}
              className="rounded-full object-cover"
              alt="profile"
            />
            <span>{username}</span>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative">
          <Image
            src={img}
            alt=""
            fill={true}
            className="object-cover rounded-sm"
          />
        </div>
      </div>
      <div className="mt-[50px] text-xl font-[300] text-[#999] text-justify">
        <p>{content}</p>
      </div>
    </>
  );
};

export default Post;
