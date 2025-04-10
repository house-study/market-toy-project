import ProductCard from '@/components/product/ProductCard';

const Home = () => {
  return (
    <div className="mx-auto grid max-w-fit grid-cols-5 items-center justify-center gap-3 p-1">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Home;
