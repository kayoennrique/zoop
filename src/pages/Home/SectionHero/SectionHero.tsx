import "./SectionHero.css";
import Button from "../../../components/Button";
import SectionHeroImage from "./SectionHeroImage";
import SectionHeroTitle from "./SectionHeroTitle";
import SectionHeroDescription from "./SectionHeroDescription";

const SectionHero = () => {

  return (
    <section className="section__hero">
      <div className="section__hero--content">
        <SectionHeroImage />
        <div className="section__hero--informations">
          <SectionHeroTitle />
          <SectionHeroDescription />
          <Button variant="primary">
            Quero ver!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
