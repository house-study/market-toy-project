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
    <div>
      <h1>장바구니</h1>
      <ul className="space-y-2">
        {cartItems.map(item => (
          <li key={item.id}>
            <p>상품 ID: {item.id}</p>
            <p>수량: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
