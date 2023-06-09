import Image from "next/image";
import React from "react";
const accounts = [
  { src: "/1.png", alt: "Ali Dev Facebook Account" },
  { src: "/2.png", alt: "Ali Dev Instagram Account" },
  { src: "/3.png", alt: "Ali Dev twitter Account" },
  { src: "/4.png", alt: "Ali Dev Youtube Channel" },
];
const RenderAccounts = ({ src, alt }) => (
  <Image width={16} height={16} src={src} alt={alt} className="cursor-pointer opacity-70" />
);
const Footer = () => {
  return (
    <div className="h-[50px] flex justify-between items-center">
      <div>&copy;2023 A-Blog. All rights reserved.</div>
      <div className="flex items-center gap-2">
        {accounts.map((account) => (
          <RenderAccounts
            key={account.alt}
            src={account.src}
            alt={account.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
