import Image from 'next/image';
import { useParams } from 'next/navigation';

const ProductImage = () => {
  const params = useParams<{ id?: string }>();
  const { id } = params ?? {};

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[300px] flex-col">
      <Image
        src={`/image/product${id}.png`}
        alt="상품 상세 이미지"
        width={300}
        height={300}
        className="h-full w-full object-fill"
      />
    </div>
  );
};

export default ProductImage;
