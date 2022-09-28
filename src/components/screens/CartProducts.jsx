import React from "react";
import styled from "styled-components";
import { CartState } from "../../context/Store";
import EmptyCart from "../../assets/images/empty-cart.png";
import Rating from "../includes/Rating";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

function CartProducts() {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(cart, "cartbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    const [total, setTotal] = useState(0);
    console.log(count, "count from cart");
    useEffect(() => {
        setTotal(
            cart.reduce(
                (accumulator, currentelement) =>
                    accumulator +
                    Number(currentelement.price) * currentelement.qty, // to convert the string to number .bcs accumulator + currentelement.priceshould be in a string format
                0 //initial value of accumulator
            )
        );
    });
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1);
    };
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
        // setCount(count - 1);
    };
    return (
        <MainContainer>
            <div className="wrapper">
                <CartOuterContainer>
                    {cart.length > 0 ? (
                        cart.map((cartitem) => (
                            <CartContainer key={cartitem.id}>
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
                                        <Btn
                                            onClick={() => {
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: cartitem.id,
                                                        qty: cartitem.qty - 1,
                                                    },
                                                });
                                            }}
                                        >
                                            -
                                        </Btn>
                                        <Btn
                                            onClick={() => {
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: cartitem.id,
                                                        qty: cartitem.qty + 1,
                                                    },
                                                });
                                            }}
                                        >
                                            +
                                        </Btn>
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
                                <EmptyCartImg
                                    src={EmptyCart}
                                    alt="empty-cart"
                                />
                            </EmptyCartBox>
                            <EmptyCartText>Cart is empty</EmptyCartText>
                        </CartEmptyContainer>
                    )}
                </CartOuterContainer>
                <CheckOutContainer>
                    <Title>Subtotal ({cart.length}) items</Title>
                    <TotalPrice>Total Price : ${total}</TotalPrice>
                    <CheckOutBtn>Proceed to Checkout</CheckOutBtn>
                </CheckOutContainer>
            </div>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    padding: 50px 20px;
    background-color: #b0c4de;
    & .wrapper {
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 20px;
    }
`;
const CartOuterContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
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
    width: 35%;
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
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    &:hover {
        -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        background-color: #000;
        color: #fff;
    }
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
    width: 35%;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-column-gap: 30px;
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
    &:hover {
        -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        color: #fff;
        background-color: #000;
    }
`;
const CheckOutContainer = styled.div`
    background-color: #000;
    padding: 40px 20px;
`;
const Title = styled.h3`
    color: #fff;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
`;
const TotalPrice = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const CheckOutBtn = styled.button`
    display: inline-block;
    background-color: #00416a;
    color: #fff;
    border: 2px solid #00416a;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 8px;
    border-radius: 4px;
    &:hover {
        background-color: #fff;
        color: #000;
    }
    width: 100%;
    text-align: center;
`;

export default CartProducts;
