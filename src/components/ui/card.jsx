import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`card ${className || ""}`} style={{
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      padding: "1rem"
    }}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }) {
  return (
    <h2 className={className || ""} style={{ margin: 0 }}>
      {children}
    </h2>
  );
}
