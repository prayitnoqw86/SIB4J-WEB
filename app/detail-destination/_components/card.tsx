interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-300 shadow-none relative ${className}`}
    >
      {children}
    </div>
  );
}