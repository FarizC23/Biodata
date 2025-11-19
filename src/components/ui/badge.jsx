import React from "react";

export function Badge({ children, className }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        border: "1px solid #ccc"
      }}
    >
      {children}
    </span>
  );
}
