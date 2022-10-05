import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartState } from "../../context/Store";
import QuickCartView from "../screens/QuickCartView";

function NavBar() {
    const {
        state: { cart },
        dispatch,
        filterDispatch,
    } = CartState();
    const [cartView, setCartView] = useState(false);
    return (
        <MainContainer>
            <div className="wrapper">
                <Logo to="/">Shoppy.</Logo>
                <NavList onClick={() => setCartView(false)}>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/products">Products</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/contacts">Contacts</NavItem>
                </NavList>
                <RightContainer>
                    <Form>
                        <Input
                            type="search"
                            placeholder="Search Product Here.."
                            onChange={(e) =>
                                filterDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                })
                            }
                        />
                    </Form>
                    <Item to="/login">
                        <BiLogIn className="me-1" /> <span>Login</span>
                    </Item>
                    <Item to="/register">
                        <FaUserPlus />
                        <span>Register</span>
                    </Item>
                    <CartItem onClick={() => setCartView(!cartView)}>
                        <BiCartAlt className="me-1" />
                        <span>Cart({cart ? cart.length : 0})</span>
                    </CartItem>
                </RightContainer>
            </div>
            <QuickCartView cartView={cartView} setCartView={setCartView} />
        </MainContainer>
    );
}
const MainContainer = styled.div`
    height: 80px;
    position: relative;
    & .wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Logo = styled(Link)`
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    width: 20%;
`;
const NavList = styled.div`
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const NavItem = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    color: #000;
    &:last-child {
        margin-right: 0;
    }
    &.active {
        color: green;
        border-bottom: 2px solid green;
        width: max-content;
    }
`;

const RightContainer = styled.div`
    position: relative;
    width: 40%;
    display: flex;
`;
const Form = styled.form`
    padding: 10px;
    width: 40%;
    background-color: aliceblue;
    margin-right: 20px;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    appearance: unset;
    &::placeholder {
        font-size: 16px;
    }
`;
const Item = styled.div`
    border: 1px solid #000;
    padding: 5px;
    width: 90px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    & span {
        margin-left: 5px;
    }
`;
const CartItem = styled.div`
    border: 1px solid #000;
    padding: 5px;
    width: 90px;
    cursor: pointer;
    margin-right: 0;
    display: flex;
    align-items: center;
    & span {
        margin-left: 5px;
    }
`;

export default NavBar;
