"use client";
import React from "react";

interface ThankYouMessageProps {
  name: string | null;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ name }) => {
  return (
    <div
      className="flex-col"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        fontSize: 32,
        fontWeight: 600,
        color: "#000",
      }}
    >
      ขอบคุณสำหรับข้อมูล 😊
      <span style={{ fontSize: 40, color: "#000" }}>
        {name ? `คุณ ${name}` : ""}
      </span>
    </div>
  );
};

export default ThankYouMessage;
