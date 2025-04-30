'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { formatPrice } from '@/utils/format';

interface ProductCardProps {
  id: string; // 상품 ID
  image: string; // 상품 이미지 URL
  name: string; // 상품 이름
  description: string; // 상품 설명
  price: number; // 상품 가격
  link: string; // 상품 링크
}

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  link,
}: ProductCardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // 서버에서 아무것도 렌더링하지 않음

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Link href={`/products/${id}`} key={id}>
      <div className="flex h-[300px] flex-col">
        <div className="group relative h-[200px] w-[200px] overflow-hidden rounded-lg shadow-md">
          {/* 로딩 UI */}
          {isLoading && (
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'linear-gradient(90deg, #f3f4f6, #e5e7eb, #f3f4f6)',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
              }}
            />
          )}
          <Image
            src={image}
            alt="상품 예시 이미지"
            width={200}
            height={200}
            onLoad={handleImageLoad} // 이미지가 로드되었을 때 호출
            className="h-full w-full object-fill transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <section className="mt-1 w-[200px] flex-1 text-sm">
          <div className="flex items-center gap-2">
            <h1 className="line-clamp-1 max-w-[140px] overflow-hidden font-semibold text-ellipsis">
              {name}
            </h1>
            <Link
              href={link}
              className="font-bold text-gray-500 hover:text-gray-700"
            >
              공식 {'>'}
            </Link>
          </div>
          <h2 className="line-clamp-2 max-w-[180px] overflow-hidden font-semibold text-ellipsis text-gray-700">
            {description}
          </h2>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700">
              {formatPrice(price)}원
            </span>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default ProductCard;
