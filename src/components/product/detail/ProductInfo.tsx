import { formatPrice } from '@/utils/format';

import Badge from '../../common/Badge';

interface ProductInfoProps {
  product: ProductCard;
}

const ProductInfo = ({ product }: ProductInfoProps) => (
  <section className="w-full lg:w-[300px] lg:min-w-[300px]">
    <div className="mb-1">
      {product?.name && product?.name.length < 10 ? (
        <>
          <h1 className="inline text-2xl font-bold">{product?.name}</h1>
          <span className="ml-2 align-top">
            <Badge label={product?.label} />
          </span>
        </>
      ) : (
        <div className="mt-2">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <Badge label={product?.label} />
        </div>
      )}
    </div>
    <p className="text-sm text-gray-500">{product?.description}</p>
    <p className="text-sm text-gray-500">
      원산지: {product?.origin ? product?.origin : '-'}
    </p>
    <p className="text-lg font-semibold">{formatPrice(product?.price)}원</p>
  </section>
);

export default ProductInfo;
