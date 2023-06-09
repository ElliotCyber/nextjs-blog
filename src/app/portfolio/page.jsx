import Link from "next/link";
import React from "react";
const links = [
  { id: 1, title: "Illustrations", path: "/portfolio/illustrations" },
  { id: 2, title: "Websites", path: "/portfolio/websites" },
  { id: 3, title: "Applications", path: "/portfolio/applications" },
];

const RenderLinks = ({ url, text }) => (
  <Link
    href={url}
    className="link_item border-[#bbb] border-[5px] w-[300px]  h-[400px] relative bg-cover"
  >
    <span className="link_item_title absolute right-2.5 bottom-2.5 text-4xl font-bold text-gray-200">
      {text}
    </span>
  </Link>
);
const Portfolio = () => {
  return (
    <div>
      <h1 className="my-5">Choose a gallery</h1>
      <div className="flex gap-[50px]">
        {links.map((link) => (
          <RenderLinks key={link.id} url={link.path} text={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
