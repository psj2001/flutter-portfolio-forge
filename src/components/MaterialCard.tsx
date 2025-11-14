import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MaterialCardProps {
  children: ReactNode;
  className?: string;
  elevation?: 1 | 2 | 3 | 4;
  hover?: boolean;
}

const MaterialCard = ({ 
  children, 
  className = "", 
  elevation = 2,
  hover = true 
}: MaterialCardProps) => {
  const elevationClass = `shadow-elevation-${elevation}`;
  
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-card rounded-2xl ${elevationClass} hover:shadow-elevation-3 transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MaterialCard;
