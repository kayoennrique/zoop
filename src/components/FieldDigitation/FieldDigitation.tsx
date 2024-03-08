import React from "react";
import "./FieldDigitation.css";
import ErroMessage from "./ErroMessage";

interface FieldDigitationProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  subtitle?: string;
  icon?: React.ReactNode;
  id?: string;
  erro?: string;
}

const FieldDigitation = ({
  subtitle,
  id,
  erro,
  ...rest
}: FieldDigitationProps) => {
  return (
    <label htmlFor={id} className="field__digitation--subtitle">
      {subtitle}
      <input className="field__digitation" id={id} {...rest} />
      {erro && <ErroMessage erroMessage={erro} />}
    </label>
  );
};

export default FieldDigitation;