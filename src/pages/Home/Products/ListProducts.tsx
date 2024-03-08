import ProductCard from "./ProductCard";
import { ProductsProps } from "./Products";

const ListProducts = ({ products }: ProductsProps) => {
  return (
    <ul className="products__mostWanted--list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          src={`/images/products/${product.src}`}
          altImg={product.altImg}
          name={product.name}
          description={product.description}
          amount={product.amount}
        />
      ))}
    </ul>
  );
};

export default ListProducts;
