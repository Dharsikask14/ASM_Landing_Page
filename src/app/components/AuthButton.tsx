import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, HTMLMotionProps } from "motion/react";

interface AuthButtonProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
}

export function AuthButton({ children, href, onClick, ...props }: AuthButtonProps) {
  const { user, openLoginModal } = useAuth();

  const handleClick = (e: any) => {
    if (!user) {
      e.preventDefault();
      openLoginModal();
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.a 
      href={href} 
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
