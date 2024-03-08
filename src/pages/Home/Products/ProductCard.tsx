import { Link } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import { ProductProps } from "./Products";

const ProductCard = ({
  src,
  altImg,
  id,
  name,
  description,
  amount,
}: ProductProps) => {
  return (
    <li>
      <Link to={`products/${id}`} className="products__mostWanted--card">
        <ProductImage src={src} altImg={altImg} />
        <div className="products__mostWanted--informations">
          <ProductTitle title={name} />
          <ProductDescription text={description} />
          <ProductPrice price={amount} />
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
