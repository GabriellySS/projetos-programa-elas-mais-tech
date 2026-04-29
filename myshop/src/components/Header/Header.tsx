import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";

export const Header: React.FC = () => {
    const { user } = useSelector(
        (rootReducer: RootReducer) => rootReducer.userReducer,
    );
    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const isLogged = user !== null;

    function handleUserAuth() {
        // usuário não está logado
        if (user === null) {
            //despachar a action de login
            dispatch(
                login({
                    name: "Gabrielly Santos",
                    email: "gabrielly@email.com",
                }),
            );
        } else {
            dispatch(logout());
        }
    }

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>

            <Cart showCart={showCart} />
        </S.StyledHeader>
    );
};
