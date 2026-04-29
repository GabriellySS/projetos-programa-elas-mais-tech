import type { Product } from "../../Data/products";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cart } = useSelector(
        (rootReducer: RootReducer) => rootReducer.cartReducer,
    );
    const dispatch = useDispatch();

    // váriavel booleana que informa se o produto está no carrinho
    const isProductOnCart =
        cart.find((productOnCart) => product.id === productOnCart.id) !==
        undefined;

    function handleAddProductToCart() {
        // despachar a action de adicionar o produto ao carrinho
        dispatch(addProduct(product));
    }

    function handleRemoveProductToCart() {
        dispatch(removeProduct(product));
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    {Array.from({ length: 5 }).map((_, index) =>
                        index < Math.round(product.rating) ? (
                            <FaStar key={index} />
                        ) : (
                            <FaRegStar key={index} />
                        ),
                    )}
                    ({product.rating})
                </S.Review>
                <S.Price>${product.price}</S.Price>
            </S.ReviewPriceContainer>
            <S.AddToCartButtonWrapper>
                {isProductOnCart ? (
                    <S.RemoveFromCartButton onClick={handleRemoveProductToCart}>
                        Remover do carrinho <FiShoppingCart />
                    </S.RemoveFromCartButton>
                ) : (
                    <S.AddToCartButton onClick={handleAddProductToCart}>
                        Adicionar ao carrinho <FiShoppingCart />
                    </S.AddToCartButton>
                )}
            </S.AddToCartButtonWrapper>
        </S.Card>
    );
};
