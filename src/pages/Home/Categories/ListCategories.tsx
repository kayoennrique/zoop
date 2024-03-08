import CategorieItem from "./CategorieItem";
import { CategoriesProps } from "./Categories";

const ListCategories = ({ categories }: CategoriesProps) => {
  return (
    <ul tabIndex={0} className="section__categorie">
      {categories.map((categorie) => (
        <CategorieItem
          key={categorie.id}
          title={categorie.title}
          src={categorie.src}
          altImg={categorie.altImg}
        />
      ))}
    </ul>
  );
};

export default ListCategories;
