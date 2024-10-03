import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: 10,
        margin: 10,
      }}>
      {children}
    </div>
  );
};

export default CardWrapper;
