
import Typography from "@/components/Typography";
import IconesLinks from "../IconsLinks";

type ProductHeaderProps = {
  nome: string;
};

const ProductHeader = ({ nome }: ProductHeaderProps) => {
  return (
    <div className="pagina__produto--cabecalho">
      <Typography element="h1" variant="h1" color="blue">
        {nome}
      </Typography>
      <IconesLinks />
    </div>
  );
};

export default ProductHeader;