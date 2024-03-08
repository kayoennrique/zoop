import Typography from "@/components/Typography";


type DescriptionProps = {
  description: string;
};

const ProductDescription = ({ description }: DescriptionProps) => {
  return (
    <Typography element="p" variant="body" color="blue">
      {description}
    </Typography>
  );
};

export default ProductDescription;
