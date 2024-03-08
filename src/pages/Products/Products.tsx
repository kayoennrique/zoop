import Button from "@/components/Button";
import Amount from "./Amount";
import Guarantee from "./Guarantee";
import Options from "./Options";
import Price from "./Price/Price";
import ProductDescription from "./Description";
import ProductHeader from "./ProductHeader/ProductHeader";
import ProductImage from "./ProductImage/ProductImage";
import detailsProducts from "@/assets/products.json";
import { IconeBotao } from "@/components/Icons";
import { useParams } from "react-router-dom";
import "./PageProduct.css";

const Products = () => {
  const params = useParams();

  const [currentProduct] = detailsProducts.filter(
    (product) => product.id == Number(params.product)
  );

  return (
    <div className="pagina__produto">
      <section>
        <div className="pagina__produto--conteudo">
          <ProductImage src={currentProduct.src} alt={currentProduct.altImg} />
          <div className="pagina__produto--informacoes">
            <ProductHeader nome={currentProduct.name} />
            <ProductDescription description={currentProduct.description} />
            <Price price={currentProduct.amount} />
            <Options />
            <Guarantee />
            <Amount />
            <Button variant="primary" icon={<IconeBotao />}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
