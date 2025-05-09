"use client";

import React from "react";

export default function Bubbles() {
  const bubbles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 80,
    left: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className="bubbles">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
