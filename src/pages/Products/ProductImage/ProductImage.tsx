type ProductImageProps = {
  src: string;
  alt: string;
};

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <img
      className="pagina__produto--imagem"
      src={"/images/products/detail-products/" + src}
      alt={alt}
    />
  );
};

export default ProductImage;
