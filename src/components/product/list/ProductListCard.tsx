import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { formatPrice } from '@/utils/format';

interface ProductListCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
  blurDataURL?: string;
}

const ProductListCard = ({
  id,
  image,
  name,
  description,
  price,
  link,
  blurDataURL,
}: ProductListCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex h-[300px] flex-col">
        <div className="group relative h-[200px] w-[200px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={image}
            alt={`${name} 이미지`}
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="h-full w-full object-fill transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <article className="mt-1 w-[200px] flex-1 text-sm">
          <div className="flex items-center gap-2">
            <h1 className="line-clamp-1 max-w-[140px] overflow-hidden font-semibold text-ellipsis">
              {name}
            </h1>
            <span
              onClick={e => {
                e.preventDefault();
                window.open(link, '_blank'); // 새 창에서 링크 열기
              }}
              className="cursor-pointer font-bold text-gray-500 hover:text-gray-700"
            >
              공식 {'>'}
            </span>
          </div>
          <h2 className="line-clamp-2 max-w-[180px] overflow-hidden font-semibold text-ellipsis text-gray-700">
            {description}
          </h2>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700">
              {formatPrice(price)}원
            </span>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default ProductListCard;
