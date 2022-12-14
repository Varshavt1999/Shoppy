import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { CartState } from "../../context/Store";
import { Link } from "react-router-dom";
import Close from "../../assets/images/close.png";

function QuickCartView({ cartView, setCartView }) {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <MainContainer className={cartView ? "active" : ""}>
            <CloseButtonContainer>
                <CloseBtn onClick={() => setCartView(false)}>
                    <CloseImg src={Close} alt="Close" />
                </CloseBtn>
            </CloseButtonContainer>
            <TopContainer>
                {cart?.length > 0 ? (
                    cart?.map((cartitem) => (
                        <ProductItem>
                            <LeftBox>
                                <ProductImage
                                    src={cartitem.image}
                                    alt="cart-item"
                                />
                            </LeftBox>
                            <MiiddleBox>
                                <ProductName>{cartitem.category}</ProductName>
                                <productPrice>{cartitem.price}</productPrice>
                            </MiiddleBox>
                            <RightBox
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: cartitem,
                                    });
                                }}
                            >
                                <FaTrashAlt />
                            </RightBox>
                        </ProductItem>
                    ))
                ) : (
                    <EmptyCartBox>cart is empty</EmptyCartBox>
                )}
            </TopContainer>
            <BottomContainer onClick={() => setCartView(false)}>
                <Button to="/cart">Go To Cart</Button>
            </BottomContainer>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    padding: 15px;
    z-index: 10;
    position: absolute;
    right: 20px;
    /* top: -100%;
    opacity: 0; */
    top: 85px;
    display: none;
    width: 28%;
    background-color: #999aab;
    border-radius: 8px;
    z-index: 100;
    transition: all ease-in 0.8s;
    &.active {
        /* top: 80px;
        opacity: 1; */
        display: block;
        transition: all ease-in 0.8s;
    }
`;
const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;
    margin-bottom: 20px;
`;
const CloseBtn = styled.div`
    width: 22px;
    cursor: pointer;
`;
const CloseImg = styled.img`
    display: block;
    width: 100%;
`;
const TopContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
`;
const ProductItem = styled.div`
    padding: 5px;
    margin-bottom: 10px;
    /* display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-content: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child {
        margin-bottom: 0;
    }
`;
const LeftBox = styled.div`
    height: 50px;
    width: 50px;
    overflow: hidden;
`;
const ProductImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const MiiddleBox = styled.div`
    width: 60%;
`;
const ProductName = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 0;
`;
const RightBox = styled.div`
    display: grid;
    place-items: center;
    width: 50px;
    cursor: pointer;
`;
const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Button = styled(Link)`
    display: inline-block;
    padding: 7px;
    text-decoration: none;
    border-radius: 8px;
    width: 180px;
    border: 2px solid green;
    background-color: green;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;
const EmptyCartBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 20px;
    font-weight: bold;
`;

export default QuickCartView;
