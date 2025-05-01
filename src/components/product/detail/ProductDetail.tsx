import ProductInfo from './ProductInfo';
import ProductOptions from './ProductOptions';

const ProductDetailInfo = ({ product }: { product: ProductCard }) => {
  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <ProductInfo product={product} />
      <ProductOptions />
      <section className="mt-6 flex gap-3">
        <button
          className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors duration-150 hover:bg-gray-100"
          type="button"
        >
          장바구니
        </button>
        <button
          className="flex-1 rounded bg-blue-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-700"
          type="button"
        >
          구매하기
        </button>
      </section>
    </div>
  );
};

export default ProductDetailInfo;
