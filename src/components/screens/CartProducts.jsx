import React from "react";
import styled from "styled-components";

function CartProducts() {
    return (
        <MainContainer>
            <div className="wrapper">
                {" "}
                <CartContainer>
                    <Product>
                        <ProductImage />
                    </Product>
                    <PurchaseDetails>
                        <Name>dfdgrfgrgrgergrg</Name>
                        <PriceBox>3 × $22.3 = $66.9</PriceBox>
                        <ButtonBox>
                            <Btn>-</Btn>
                            <Btn>+</Btn>
                        </ButtonBox>
                    </PurchaseDetails>
                </CartContainer>
                <CartContainer>
                    <Product>
                        <ProductImage />
                    </Product>
                    <PurchaseDetails>
                        <Name>wwdwfwfdwfwf</Name>
                        <PriceBox>3 × $22.3 = $66.9</PriceBox>
                        <ButtonBox>
                            <Btn>-</Btn>
                            <Btn>+</Btn>
                        </ButtonBox>
                    </PurchaseDetails>
                </CartContainer>
                <CartContainer>
                    <Product>
                        <ProductImage />
                    </Product>
                    <PurchaseDetails>
                        <Name>hjffhegfhefegfe</Name>
                        <PriceBox>3 × $22.3 = $66.9</PriceBox>
                        <ButtonBox>
                            <Btn>-</Btn>
                            <Btn>+</Btn>
                        </ButtonBox>
                    </PurchaseDetails>
                </CartContainer>
            </div>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    padding: 50px 20px;
`;
const CartContainer = styled.div`
    margin-bottom: 30px;
    border: 1px solid #129e6b;
    border-radius: 4px;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
`;
const Product = styled.div`
    background-color: aliceblue;
`;
const ProductImage = styled.img`
    display: block;
    width: 100%;
`;
const PurchaseDetails = styled.div``;
const Name = styled.div`
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
`;
const PriceBox = styled.div`
    margin-bottom: 10px;
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
`;

export default CartProducts;
