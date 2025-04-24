// lib/fetchProducts.ts
export const fetchProducts = async () => {
  const res = await fetch('http://localhost:3001/products');
  if (!res.ok) {
    throw new Error('상품 목록 불러오기에 실패하였습니다.');
  }
  return res.json();
};
