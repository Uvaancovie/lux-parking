
import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryBlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  hover?: boolean;
  accent?: boolean;
}

export const LuxuryBlurCard: React.FC<LuxuryBlurCardProps> = ({
  children,
  className,
  intensity = "medium",
  hover = false,
  accent = false,
  ...props
}) => {
  const intensityClasses = {
    light: "bg-black/60 backdrop-blur-xs shadow-glass-sm border-gold/20",
    medium: "bg-black/70 backdrop-blur-md shadow-glass border-gold/30",
    heavy: "bg-black/80 backdrop-blur-lg shadow-glass-lg border-gold/40",
  };

  return (
    <div
      className={cn(
        "rounded-md border transition-all duration-300",
        intensityClasses[intensity],
        hover && "hover:-translate-y-1 hover:shadow-luxury",
        accent && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold/10 before:to-transparent before:rounded-md before:-z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LuxuryBlurCard;
