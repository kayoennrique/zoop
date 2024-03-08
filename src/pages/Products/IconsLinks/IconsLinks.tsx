import { IconeCompartilhar, IconeFavoritar } from "@/components/Icons";
import Link from "@/components/Link";


const IconsLinks = () => {
  return (
    <div className="pagina__produto--icones">
      <Link href="#">
        <IconeCompartilhar />
      </Link>
      <Link href="#">
        <IconeFavoritar />
      </Link>
    </div>
  );
};

export default IconsLinks;
