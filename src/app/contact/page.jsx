import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Raz Dev Contact Information",
  description: "This is contact page",
};

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center my-14">
      <h1 className="head_text">Let's Leep in Touch</h1>
      <div className="flex gap-[100px] items-center">
        <div className="flex-1 object-contain sm:flex hidden">
          <Image
            src="/contact.png"
            alt="contact image"
            width={400}
            height={400}
            className="animate-move"
          />
        </div>
        <form className="flex-col flex flex-1 gap-[20px] contact_form_card">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="form_input"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className="form_input"
          />
          <textarea
            className="form_textarea"
            placeholder="message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={"green_btn"}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
