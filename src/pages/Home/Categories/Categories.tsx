import Typography from "../../../components/Typography";
import "./Categories.css";
import ListCategories from "./ListCategories";

export interface CategoriesProps {
  categories: CategorieProps[];
}

export interface CategorieProps {
  id?: number;
  title: string;
  src: string;
  altImg: string;
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className="section__categories">
      <Typography element="h2" variant="h2" color="blue">
        Categorias
      </Typography>
      <Typography element="p" variant="body" color="graphite">
        Escolha a categoria de produto que você deseja:
      </Typography>
      <ListCategories categories={categories} />
    </section>
  );
};

export default Categories;
