import Link from 'next/link';
import { useState } from 'react';

import ProductInfo from './ProductInfo';
import ProductOptions from './ProductOptions';

const ProductDetailInfo = ({ product }: { product: ProductCard }) => {
  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const [quantity, setQuantity] = useState(1); // ✅ 수량 상태

  const handleAddToCart = () => {
    if (!product) return;

    const existingItem = localStorage.getItem('cart');
    const cart = existingItem ? JSON.parse(existingItem) : [];

    const updatedCart = [
      ...cart.filter((item: CartItem) => item.id !== product.id),
      {
        id: product.id,
        quantity,
      },
    ];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('장바구니에 추가되었습니다!');
  };

  return (
    <div>
      <ProductInfo product={product} />
      <ProductOptions quantity={quantity} setQuantity={setQuantity} />
      <section className="mt-6 flex gap-3">
        <button
          className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors duration-150 hover:bg-gray-100"
          onClick={handleAddToCart}
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
      <div className="mb-6 flex justify-end">
        <Link href="/cart" className="mt-4 hover:underline">
          장바구니 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
