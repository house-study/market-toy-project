import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { formatPrice } from '@/utils/format';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
  blurDataURL?: string;
}

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  link,
  blurDataURL,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex h-[300px] flex-col">
        <div className="group relative h-[200px] w-[200px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={image}
            alt="상품 예시 이미지"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="h-full w-full object-fill transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <section className="mt-1 w-[200px] flex-1 text-sm">
          <div className="flex items-center gap-2">
            <h1 className="line-clamp-1 max-w-[140px] overflow-hidden font-semibold text-ellipsis">
              {name}
            </h1>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-500 hover:text-gray-700"
              onClick={e => e.stopPropagation()} // 클릭 전파 방지
            >
              공식 {'>'}
            </a>
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
