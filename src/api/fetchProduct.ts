const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async (): Promise<ProductCard[]> => {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('상품 목록 불러오기에 실패하였습니다.');
  }
  return res.json();
};

export const fetchProductById = async (
  id: number | string,
): Promise<ProductCard> => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error(`ID가 ${id}인 상품을 불러오지 못했습니다.`);
  }

  return res.json();
};
