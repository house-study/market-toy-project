import { fetchProducts } from '@/api/fetchProduct';
import ProductCard from '@/components/product/list/ProductCard';

interface HomeProps {
  products: ProductCard[];
}

const Home = ({ products }: HomeProps) => {
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

export const getServerSideProps = async () => {
  try {
    const products = await fetchProducts();
    return {
      props: { products },
    };
  } catch (error) {
    console.error('상품 정보 불러오기에 실패하였습니다:', error);
    return {
      props: { products: [] },
    };
  }
};

export default Home;
