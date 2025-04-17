import { mockProducts } from '@/data/products';
import { formatPrice } from '@/utils/format';

import ProductOptions from './ProductOptions';
import Badge from '../../common/Badge';

const ProductDetailInfo = ({ productId }: { productId?: string }) => {
  const product = mockProducts.find(
    product => product.id === Number(productId),
  );

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <section className="lg:w-min-[300px] w-full lg:w-[300px]">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <Badge label={product.label} />
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-sm text-gray-500">
          원산지: {product.origin ? product.origin : '-'}
        </p>
        <p className="text-lg font-semibold">{formatPrice(product.price)}원</p>
      </section>

      <ProductOptions options={product?.options} />

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
