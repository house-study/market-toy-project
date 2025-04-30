export const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('상품 목록 불러오기에 실패하였습니다.');
  }
  return res.json();
};
