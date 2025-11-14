import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlutterButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outlined" | "text";
  href?: string;
  className?: string;
}

const FlutterButton = ({
  children,
  onClick,
  variant = "filled",
  href,
  className = "",
}: FlutterButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all";
  
  const variantClasses = {
    filled: "bg-primary text-primary-foreground shadow-elevation-2 hover:shadow-elevation-3",
    outlined: "border-2 border-primary text-primary hover:bg-primary-container",
    text: "text-primary hover:bg-primary-container",
  };

  const ButtonContent = () => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
};

export default FlutterButton;
