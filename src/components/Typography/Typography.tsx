import React from "react";
import classNames from "classnames";
import "./Typography.css";

interface TypographyProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "body" | "highlight";
  children: React.ReactNode;
  element: "h1" | "h2" | "h3" | "p";
  color?: "green" | "magenta" | "blue" | "graphite" | "gray";
}

const mapTypography = {
  h1: "typography__title--1",
  h2: "typography__title--2",
  h3: "typography__title--3",
  body: "typography__paragraph",
  highlight: "typography__highlight",
};

const mapColors = {
  green: "green",
  magenta: "magenta",
  blue: "blue",
  graphite: "graphite",
  gray: "gray",
};

const Typography = ({
  variant = "body",
  element = "p",
  children,
  color = "blue",
  ...rest
}: TypographyProps) => {
  const Element = element;

  const classes = classNames({
    [mapTypography[variant]]: variant,
    [mapColors[color]]: color,
  });

  return (
    <Element className={`typography ${classes}`} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
