"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
    setError(false);
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  return (
    <div className="items-center flex justify-center gap-5 flex-col">
      <form
        className="flex flex-col justify-between gap-5 w-[400px]"
        onSubmit={handleSubmit}
      >
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
          Login
        </button>
        {error && (
          <span className="text-red-600 font-semibold">
            Wrong email or password
          </span>
        )}
      </form>
      <span className="">- OR -</span>
      <div className="items-center flex flex-col gap-4 w-[400px]">
        <button
          className="google_btn"
          onClick={() => {
            signIn("google");
          }}
        >
          <span className="mr-1.5">
            <FcGoogle />
          </span>{" "}
          Sign in with Google
        </button>
        <button
          className="github_btn"
          onClick={() => {
            signIn("github");
          }}
        >
          <span className="mr-1.5">
            <FaGithub />
          </span>{" "}
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
