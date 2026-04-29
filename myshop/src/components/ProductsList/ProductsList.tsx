import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../Data/products";
import * as S from "./styles";

export const ProductsList: React.FC = () => {
    // Se você preferir, você pode utilizar um useEffect para puxar esses dados da API de produtos

    return (
        <S.Container>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </S.Container>
    );
};
