import Link from "../../../components/Link";
import Typography from "../../../components/Typography";
import ListProducts from "./ListProducts";
import "./Products.css";

export interface ProductsProps {
  products: ProductProps[];
}

export interface ProductProps {
  id?: number;
  name: string;
  description: string;
  amount: number;
  src: string;
  altImg: string;
}

const Products = ({ products }: ProductsProps) => {
  return (
    <section className="products__mostWanted">
      <div className="products__mostWanted--content">
        <Typography element="h2" variant="h2" color="blue">
          Mais procurados da semana
        </Typography>
        <ListProducts products={products} />
        <div className="products__mostWanted--link">
          <Link variant="secondary" href="#" title="Ver mais">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
