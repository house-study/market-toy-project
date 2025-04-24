import Image from 'next/image';

const ProductImage = ({ productId }: { productId?: string }) => {
  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[300px] flex-col">
      <Image
        src={`/image/product_${productId}.png`}
        alt="상품 상세 이미지"
        width={300}
        height={300}
        className="h-full w-full object-fill"
      />
    </div>
  );
};

export default ProductImage;
