import ProductImage from '@/components/product/detail/ProductImage';

const ProductDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProductImage />
      <section>상품 상세 섹션</section>
      <section>상품 옵션 선택 섹션</section>
      <section>구매, 장바구니 버튼 섹션</section>

      <section>상세 헤더</section>
      <section>상세 페이지</section>
    </div>
  );
};

export default ProductDetail;
