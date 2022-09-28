import React from "react";
import styled from "styled-components";
import { CartState } from "../../context/Store";
import EmptyCart from "../../assets/images/empty-cart.png";
import Rating from "../includes/Rating";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function CartProducts() {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(cart, "cartbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    return (
        <MainContainer>
            <div className="wrapper">
                {cart.length > 0 ? (
                    cart.map((cartitem) => (
                        <CartContainer>
                            <Product>
                                <ProductImage
                                    src={cartitem.image}
                                    alt="cart-item"
                                />
                            </Product>
                            <PurchaseDetails>
                                <Name>{cartitem.category}</Name>
                                <PriceBox>
                                    {cartitem.qty} × ${cartitem.price} = $
                                    {cartitem.qty * cartitem.price}
                                </PriceBox>
                                <ButtonBox>
                                    <Btn>-</Btn>
                                    <Btn>+</Btn>
                                </ButtonBox>
                            </PurchaseDetails>
                            <RightBox>
                                <RatingBox>
                                    <Rating rating={cartitem.rating.rate} />
                                </RatingBox>
                                <RemoveIconBox
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: cartitem,
                                        });
                                    }}
                                >
                                    <span>Remove Product</span>
                                    <MdOutlineRemoveShoppingCart />
                                </RemoveIconBox>
                            </RightBox>
                        </CartContainer>
                    ))
                ) : (
                    <CartEmptyContainer>
                        <EmptyCartBox>
                            <EmptyCartImg src={EmptyCart} alt="empty-cart" />
                        </EmptyCartBox>
                        <EmptyCartText>Cart is empty</EmptyCartText>
                    </CartEmptyContainer>
                )}
            </div>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    padding: 50px 20px;
    background-color: #b0c4de;
    & .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
    }
`;
const CartContainer = styled.div`
    margin-bottom: 30px;
    border: 1px solid #129e6b;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    &:first-child {
        margin-bottom: 0;
    }
`;
const Product = styled.div`
    background-color: aliceblue;
    width: 15%;
    height: 150px;
    overflow: hidden;
`;
const ProductImage = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`;
const PurchaseDetails = styled.div`
    width: 40%;
`;
const Name = styled.div`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
`;
const PriceBox = styled.div`
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
    color: red;
`;
const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100px;
`;
const Btn = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #000;
    grid-gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
const CartEmptyContainer = styled.div`
    height: 100%;
`;
const EmptyCartBox = styled.h3`
    width: 40%;
    margin: 0 auto 20px;
`;
const EmptyCartImg = styled.img`
    display: block;
    width: 100%;
`;
const EmptyCartText = styled.h3`
    font-size: 24px;
    color: red;
    font-weight: bold;
    text-align: center;
`;
const RightBox = styled.div`
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
`;
const RatingBox = styled.div``;
const RemoveIconBox = styled.div`
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #000;
    height: max-content;
    cursor: pointer;
    & span {
        margin-right: 5px;
        font-size: 16px;
        font-weight: 600;
    }
`;

export default CartProducts;
