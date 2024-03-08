import Typography from "../../../components/Typography";
import useCurrencyFormatter from "../../../hooks/useCurrencyFormatter";

interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  const formatterCurrency = useCurrencyFormatter();
  return (
    <Typography
      element="h3"
      variant="body"
      color="blue"
      style={{ fontWeight: "800" }}
    >
      {formatterCurrency(price)}
    </Typography>
  );
};

export default ProductPrice;
