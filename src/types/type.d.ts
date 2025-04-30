declare interface ProductCard {
  id: string; // 상품 ID
  image: string; // 상품 이미지 URL
  name: string; // 상품 이름
  description: string; // 상품 설명
  price: number; // 상품 가격
  link: string; // 상품 링크
  origin?: string; // 상품 원산지 (예: 대한민국, 미국 등)
}
