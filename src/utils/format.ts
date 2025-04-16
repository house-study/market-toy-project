export function formatPrice(price: number): string {
  const num = typeof price === 'string' ? Number(price) : price;
  if (typeof num !== 'number' || isNaN(num)) return '-';
  return num.toLocaleString('ko-KR');
}
