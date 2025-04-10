import ProductCard from '@/components/product/ProductCard';

const Home = () => {
  return (
    <div className="mx-auto grid max-w-fit grid-cols-2 items-center justify-center gap-3 p-1 md:grid-cols-3 lg:grid-cols-5">
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
      <ProductCard
        image={'/image/product.png'}
        name="슈퍼포우"
        description="슈퍼포우 껌"
        price={12800}
        link="https://brand.naver.com/superpaw"
      />
    </div>
  );
};

export default Home;
