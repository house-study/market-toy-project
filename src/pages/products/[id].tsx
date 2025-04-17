import { useParams } from 'next/navigation';

import ProductDetailInfo from '@/components/product/detail/ProductDetail';
import ProductImage from '@/components/product/detail/ProductImage';

const ProductDetail = () => {
  const params = useParams<{ id?: string }>();
  const { id } = params ?? {};

  return (
    <div className="mx-4 mt-10 flex flex-col items-center justify-center">
      <section className="flex w-fit items-start gap-4 border border-gray-200 px-[2vw] py-10 md:px-[5vw] lg:px-[14vw]">
        <ProductImage productId={id} />
        <ProductDetailInfo productId={id} />
      </section>
      <section>상세 헤더</section>
      <section>상세 페이지</section>
    </div>
  );
};

export default ProductDetail;
