import React from "react";

const layout = ({ children }) => {
  return (
    <div className="mb-16">
      <h1 className="green_gradient head_text">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
