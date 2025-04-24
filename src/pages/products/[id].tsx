import { GetServerSidePropsContext } from 'next';

import { fetchProducts } from '@/api/fetchProduct';
import ProductDetailInfo from '@/components/product/detail/ProductDetail';
import ProductImage from '@/components/product/detail/ProductImage';

interface ProductDetailPageProps {
  product: ProductCard | null;
}

const ProductDetail = ({ product }: ProductDetailPageProps) => {
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div className="mx-4 mt-10 flex flex-col items-center justify-center">
      <section className="flex w-fit items-start gap-4 border border-gray-200 px-[2vw] py-10 md:px-[5vw] lg:px-[14vw]">
        <ProductImage productImage={product?.image} />
        <ProductDetailInfo product={product} />
      </section>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { id } = context.params!;

  try {
    const data: ProductCard[] = await fetchProducts();
    const product = data.find(p => Number(p.id) === Number(id)) ?? null;

    return {
      props: { product },
    };
  } catch (error) {
    console.error('상품 정보 가져오기 실패:', error);
    return {
      props: { product: null },
    };
  }
};

export default ProductDetail;
