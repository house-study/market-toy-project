import { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedItems: CartItem[] = JSON.parse(storedCart);
        setCartItems(parsedItems);
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
              className="w-lg rounded-lg bg-gray-100 px-10 py-4"
            >
              <p>상품 ID: {item.id}</p>
              <p>수량: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
