declare interface ProductOption {
  name: string; // 옵션명 (예: '사이즈', '색상')
  values: string[]; // 선택 가능한 값들
}
declare interface ProductCard {
  id: number; // 상품 ID
  image: string; // 상품 이미지 URL
  name: string; // 상품 이름
  description: string; // 상품 설명
  price: number; // 상품 가격
  link: string; // 상품 링크
  label?: string; // 상품 라벨 (예: 신상품, 할인상품 등)
  origin?: string; // 상품 원산지 (예: 대한민국, 미국 등)
  options?: ProductOption[];
}
