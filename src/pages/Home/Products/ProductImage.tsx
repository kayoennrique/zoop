interface ProductImageProps {
  src: string;
  altImg: string;
}

const ProductImage = ({ src, altImg }: ProductImageProps) => {
  return (
    <img className="products__mostWanted--image" src={src} alt={altImg} />
  );
};

export default ProductImage;
