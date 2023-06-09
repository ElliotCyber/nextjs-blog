"use client";

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className="toggle_darkmode" onClick={toggle}>
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className="w-[15px] h-[15px] bg-[#53c28b] rounded-[50%] absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarModeToggle;
