import ProductCard from '@/components/product/list/ProductCard';
import { mockProducts } from '@/data/products';

const Home = () => {
  return (
    <div className="mx-auto grid max-w-fit grid-cols-2 items-center justify-center gap-3 p-1 md:grid-cols-3 lg:grid-cols-5">
      {mockProducts.map(product => (
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
