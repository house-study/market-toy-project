const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 상품 목록 조회
export const fetchProducts = async (): Promise<ProductCard[]> => {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('상품 목록 불러오기에 실패하였습니다.');
  }
  return res.json();
};
