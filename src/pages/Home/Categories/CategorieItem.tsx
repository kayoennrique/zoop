import Link from "../../../components/Link";
import Typography from "../../../components/Typography";
import CategorieImage from "./CategorieImage";
import { CategorieProps } from "./Categories";

const CategorieItem = ({ src, altImg, title }: CategorieProps) => {
  return (
    <li>
      <Link href="#" className="section__categorie--card">
        <CategorieImage src={`/images/categories/${src}`} alt={altImg} />
        <div className="section__categories--title">
          <Typography
            element="h2"
            variant="body"
            color="blue"
            style={{ fontWeight: "700" }}
          >
            {title}
          </Typography>
        </div>
      </Link>
    </li>
  );
};

export default CategorieItem;
