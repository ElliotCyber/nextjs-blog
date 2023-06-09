"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="items-center flex justify-center gap-5 flex-col">
      <form
        className="flex flex-col justify-between gap-5 w-[300px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="register_input"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="register_input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="register_input"
        />
        <button className="green_btn" type="submit">
          Register
        </button>
        {error && "Something went wrong"}
      </form>
      <span className="">- OR -</span>
      <Link href="/dashboard/login" className="link_btn">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
