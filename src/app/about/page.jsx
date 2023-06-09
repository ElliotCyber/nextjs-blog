import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="my-12">
      <div className="w-full h-[300px] relative">
        <Image
          alt="image"
          fill={true}
          src="/pexels-photo.jpeg"
          className="object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 bg-[#53c28b] p-1.5 text-white">
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-[100px] mt-12">
        <div className="flex flex-col gap-7">
          <h1 className="text-3xl font-semibold tracking-tight">Who Are We?</h1>
          <p className="text-lg text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-3xl font-semibold tracking-tight">What We Do?</h1>
          <p className="text-lg text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
