"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
        className="flex flex-col justify-between gap-5 w-[300px]"
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
      <button
        className="green_btn"
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>
      <button
        className="outline_btn_darkmode"
        onClick={() => {
          signIn("github");
        }}
      >
        Login with Github
      </button>
    </div>
  );
};

export default Login;
