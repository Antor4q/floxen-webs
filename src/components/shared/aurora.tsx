"use client";
import React, { memo } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#8762F5","#A77DF3", "#C0AFFE", "#A77DF3", "#8762F5"],
    speed = 1,
  }: AuroraTextProps) => {
    const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

    return (
      <span className={`relative inline-block ${className}`}>
        <span
          className="animate-aurora bg-clip-text text-transparent"
          style={{
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%",
            "--duration": `${8 / speed}s`,
          } as React.CSSProperties}
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";