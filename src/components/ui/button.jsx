import React from "react";

export function Button({ children, className, size, variant, ...props }) {
  return (
    <button
      className={className}
      style={{
        padding: size === "lg" ? "12px 24px" : "8px 16px",
        borderRadius: "8px",
        border: variant === "outline" ? "2px solid black" : "none",
        cursor: "pointer",
        fontWeight: "600"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
