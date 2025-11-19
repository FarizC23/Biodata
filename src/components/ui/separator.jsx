import React from "react";

export function Separator({ className }) {
  return (
    <hr
      className={className}
      style={{
        border: "none",
        height: "3px",
        background: "#FF6B6B",
        width: "100px",
        margin: "1rem 0"
      }}
    />
  );
}
