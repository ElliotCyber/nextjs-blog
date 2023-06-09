import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};
const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1 className="capitalize">{params.category}</h1>
      {data.map((item) => (
        <div
          className="category_item flex gap-[50px] mt-[50px] mb-[100px]"
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex-1 w-[500px] h-[500px] relative">
            <Image
              src={item.image}
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
