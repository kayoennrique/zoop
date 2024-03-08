import Typography from "../../../components/Typography";

type ProductDescriptionProps = {
  text: string;
};

const ProductDescription = ({ text }: ProductDescriptionProps) => {
  return (
    <Typography
      element="p"
      variant="body"
      color="blue"
      style={{ fontSize: "1rem" }}
    >
      {text}
    </Typography>
  );
};

export default ProductDescription;
