import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={"green_btn"}>{text}</button>
    </Link>
  );
};

export default Button;
