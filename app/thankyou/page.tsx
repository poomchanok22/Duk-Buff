"use client";
import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

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
      <span style={{ fontSize: 40, color: "#000" }}>คุณ {name}</span>
    </div>
  );
}
