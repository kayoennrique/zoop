import Products from "./Products";
import Categories from "./Categories";
import Enrollment from "./Enrollment";
import SectionHero from "./SectionHero";
import categories from "../../assets/categories.json";
import products from "../../assets/products.json";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <SectionHero />
      <Categories categories={categories} />
      <Products products={products} />
      <Enrollment />
      <Faq />
    </>
  );
};

export default Home;
