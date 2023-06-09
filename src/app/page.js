import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-[100px] my-12">
      
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="head_text">
          <span className="green_gradient">Better design </span> <br />
          for your digital products.
        </h1>
        <p className="desc">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See Our Works" url="/portfolio" />
      </div>
      <div className="flex-1 flex flex-col gap-[50px]">
        <Image
          src="/hero.png"
          alt="site hero image"
          width={500}
          height={500}
          className="animate-upAndDown object-contain"
        />
      </div>
    </div>
  );
}
