import React from "react";
import "./Button.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "standard" | "primary" | "secondary";
  icon?: React.ReactNode;
}

const mapStylesButton = {
  standard: "button__standard",
  primary: "button__primary",
  secondary: "button__secondary",
};

const Button = ({
  children,
  variant = "standard",
  icon,
  ...rest
}: ButtonProps) => {
  const classes = classNames({ [mapStylesButton[variant]]: variant });

  return (
    <button className={`button ${classes}`} {...rest}>
      {icon && <i>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
