import React from "react";
import "./Link.css";
import classNames from "classnames";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "standard" | "primary" | "secondary";
}

const mapaEstilosLink = {
  standard: "standard",
  primary: "primary",
  secondary: "secondary",
};

const Link = ({ children, variant = "standard", ...rest }: LinkProps) => {
  const classes = classNames(
    { [mapaEstilosLink[variant]]: variant },
    rest.className
  );
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
};

export default Link;
