import Typography from "../../../components/Typography";

type ProductTitleProps = {
  title: string;
};

const ProductTitle = ({ title }: ProductTitleProps) => {
  return (
    <Typography
      tabIndex={0}
      element="h3"
      variant="body"
      color="blue"
      style={{ fontWeight: "700", fontSize: "1.125rem" }}
    >
      {title}
    </Typography>
  );
};

export default ProductTitle;
