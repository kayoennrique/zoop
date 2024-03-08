import Typography from "@/components/Typography";
import useCurrencyFormatter from "@/hooks/useCurrencyFormatter";

type PriceProps = {
  price: number;
};

const Price = ({ price }: PriceProps) => {
  const formatterCurrency = useCurrencyFormatter();
  return (
    <Typography element="p" variant="h3" color="blue">
      {formatterCurrency(price)}
    </Typography>
  );
};

export default Price;
