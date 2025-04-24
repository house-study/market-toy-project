'use client';
import { useEffect, useState } from 'react';

import ProductCard from '@/components/product/list/ProductCard';

const Home = () => {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div className="mx-auto grid max-w-fit grid-cols-2 items-center justify-center gap-3 p-1 md:grid-cols-3 lg:grid-cols-5">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          link={product.link}
        />
      ))}
    </div>
  );
};

export default Home;
