interface ImageProps {
  src: string;
  alt: string;
}

const CategorieImage = ({ src, alt }: ImageProps) => {
  return <img className="section__categorie--image" src={src} alt={alt} />;
};

export default CategorieImage;
