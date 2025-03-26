
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  hover?: boolean;
}

export const BlurCard: React.FC<BlurCardProps> = ({
  children,
  className,
  intensity = "medium",
  hover = false,
  ...props
}) => {
  const intensityClasses = {
    light: "bg-white/50 backdrop-blur-xs shadow-glass-sm border-white/10",
    medium: "bg-white/60 backdrop-blur-md shadow-glass border-white/20",
    heavy: "bg-white/70 backdrop-blur-lg shadow-glass-lg border-white/30",
  };

  return (
    <div
      className={cn(
        "rounded-lg border transition-all duration-300",
        intensityClasses[intensity],
        hover && "hover:-translate-y-1 hover:shadow-glass-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurCard;
