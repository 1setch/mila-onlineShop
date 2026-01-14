import { type FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "outline" | "ghost";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "dark",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
