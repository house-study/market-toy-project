import Image from 'next/image';

const ProductCard = () => {
  return (
    <div>
      <Image
        src="/image/product.png"
        alt="상품 예시 이미지"
        width={200}
        height={200}
        className="rounded-lg shadow-md"
      />
      <section className="mt-1 text-sm">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold"> 슈퍼포우 </h3>
          <span className="font-bold text-gray-500 hover:text-gray-700">
            공식 {'>'}
          </span>
        </div>
        <h3 className="font-semibold">슈퍼포우 오래츄 </h3>
        <div className="flex items-center">
          <span className="font-bold">₩12,800</span>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
