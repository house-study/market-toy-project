import { formatPrice } from '@/utils/format';

interface ProductInfoProps {
  product: ProductCard;
}

const ProductInfo = ({ product }: ProductInfoProps) => (
  <section className="w-full lg:w-[300px] lg:min-w-[300px]">
    <div className="mb-1">
      <h1 className="inline text-2xl font-bold">{product?.name}</h1>
    </div>
    <p className="text-sm text-gray-500">{product?.description}</p>
    <p className="text-sm text-gray-500">
      원산지: {product?.origin ? product?.origin : '-'}
    </p>
    <p className="text-lg font-semibold">{formatPrice(product?.price)}원</p>
  </section>
);

export default ProductInfo;
