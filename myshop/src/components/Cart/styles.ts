import styled from "styled-components";

interface ContainerProps {
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0" : "-350px")};

    width: 300px;
    height: 100vh;
    background-color: white;

    padding: 2rem;
    box-shadow: ${(props) =>
        props.showCart ? "-5px 0 15px rgba(0, 0, 0, 0.15)" : "none"};

    transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
    padding: 2rem 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartProductItem = styled.li`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;

    font-size: 0.9rem;
`;

export const RemoveFromProductListButton = styled.button`
    border: none;
    border-radius: 5px;
    /* height: 30px;
    width: 100%; */
    padding: 0.5rem;
    background-color: violet;
    color: black;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    svg {
        font-size: 0.7rem;
    }
`;

export const CartTotal = styled.strong``;
