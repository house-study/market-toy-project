import { mockProducts } from '@/data/products';
import { formatPrice } from '@/utils/format';

import Badge from './Badge';

const ProductDetailInfo = ({ productId }: { productId?: string }) => {
  const product = mockProducts.find(
    product => product.id === Number(productId),
  );

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <article className="lg:w-min-[300px] w-full lg:w-[300px]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <Badge label={product.label} />
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
      </article>
      <section>상품 옵션 선택 섹션</section>
      <section>구매, 장바구니 버튼 섹션</section>
    </div>
  );
};

export default ProductDetailInfo;
