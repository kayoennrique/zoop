interface ErroMessageProps extends React.HTMLProps<HTMLSpanElement> {
  erroMessage: string;
}

const ErroMessage = ({ erroMessage, ...rest }: ErroMessageProps) => {
  return (
    <span className="erro-message" {...rest}>
      {erroMessage}
    </span>
  );
};

export default ErroMessage;
