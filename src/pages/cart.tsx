import { useEffect, useState } from 'react';

import { fetchProductById } from '@/api/fetchProduct';

interface CartProduct {
  id: number;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(async () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedItems: CartItem[] = JSON.parse(storedCart);
        const productFetches = await Promise.all(
          parsedItems.map(async item => {
            const product = await fetchProductById(item.id);
            return {
              ...product,
              quantity: item.quantity,
            };
          }),
        );
        setCartItems(productFetches);
      } catch (e) {
        console.error('장바구니 데이터 불러오기 실패:', e);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-20 text-xl font-bold">장바구니</h1>

      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {cartItems.map(item => (
            <li
              key={item.id}
              className="flex gap-4 rounded-lg bg-gray-100 px-8 py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded object-cover"
              />
              <div className="flex flex-col justify-between">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">수량: {item.quantity}</p>
                <p className="text-sm text-gray-800">
                  가격: {(item.price * item.quantity).toLocaleString()}원
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
