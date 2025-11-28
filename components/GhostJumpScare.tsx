"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThankYouMessage from "./Thankyou";
interface GhostProps {
  userName: string;
}

const GhostJumpScare: React.FC<GhostProps> = ({ userName }) => {
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const screamRef = useRef<HTMLAudioElement | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const ghost = ghostRef.current;
    const scream = screamRef.current;

    const timer = setTimeout(() => {
      if (ghost) {
        ghost.style.opacity = "1";
        ghost.style.transform = "translate(-50%, -50%) scale(1)";
      }
      scream?.play();
    }, 700);

    const redirectTimer = setTimeout(() => {
      setShowThankYou(true); // แทน redirect → แสดง component
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [userName]);

  if (showThankYou) {
    return <ThankYouMessage name={userName} />;
  }

  return (
    <div
      style={{
        background: "#000",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        position: "relative",
      }}
    >
      <audio ref={screamRef} src="/scream.wav"></audio>

      <div
        ref={ghostRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.2)",
          opacity: 0,
          transition: "0.25s ease",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/ghost.jpg"
          width={800}
          height={800}
          alt="ghost"
          priority
          style={{
            maxWidth: "100vw",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default GhostJumpScare;
