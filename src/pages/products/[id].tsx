'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ProductDetailInfo from '@/components/product/detail/ProductDetail';
import ProductImage from '@/components/product/detail/ProductImage';

const ProductDetail = () => {
  const params = useParams<{ id?: string }>();
  const { id } = params ?? {};

  const [product, setProduct] = useState<ProductCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then((data: ProductCard[]) => {
        const found = data.find(p => p.id === Number(id));
        setProduct(found ?? null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div className="mx-4 mt-10 flex flex-col items-center justify-center">
      <section className="flex w-fit items-start gap-4 border border-gray-200 px-[2vw] py-10 md:px-[5vw] lg:px-[14vw]">
        <ProductImage productImage={product?.image} />
        <ProductDetailInfo product={product} />
      </section>
    </div>
  );
};

export default ProductDetail;
