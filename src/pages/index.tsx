import { promises as fs } from 'node:fs';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';

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
          blurDataURL={product.blurDataURL}
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
    const productsWithBlur = await Promise.all(
      products.map(async product => {
        // 파일 시스템 절대 경로 생성
        const imagePath = path.join(process.cwd(), 'public', product.image);
        // 이미지 파일 읽기
        const buffer = await fs.readFile(imagePath);
        const { base64 } = await getPlaiceholder(buffer);
        return { ...product, blurDataURL: base64 };
      }),
    );

    return { props: { products: productsWithBlur } };
  } catch (error) {
    console.error('상품 정보 불러오기에 실패하였습니다:', error);
    return {
      props: { products: [] },
    };
  }
};

export default Home;
