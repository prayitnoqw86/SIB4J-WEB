import React from "react";

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContent({
  children,
  className = "",
}: CardContentProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}