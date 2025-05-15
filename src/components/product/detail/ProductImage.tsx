import Image from 'next/image';

const ProductImage = ({ productImage }: { productImage?: string }) => {
  if (!productImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[300px] flex-col">
      <Image
        src={productImage}
        alt="상품 상세"
        width={300}
        height={300}
        className="h-full w-full object-fill"
      />
    </div>
  );
};

export default ProductImage;
