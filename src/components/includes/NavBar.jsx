import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm bg-white">
                <div class="container-fluid">
                    <NavItem class="navbar-brand fw-bold fs-4" to="/">
                        Shoppy.
                    </NavItem>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavItem
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" to="/products">
                                    Products
                                </NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" to="/about">
                                    About
                                </NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" to="/contacts">
                                    Contacts
                                </NavItem>
                            </li>
                        </ul>
                        <Form>
                            <Input
                                type="search"
                                placeholder="Search Product Here.."
                            />
                        </Form>
                        <div className="buttons">
                            <NavItem
                                to="/login"
                                className="btn btn-outline-dark"
                            >
                                <BiLogIn className="me-1" /> Login
                            </NavItem>
                            <NavItem
                                to="/register"
                                className="btn btn-outline-dark ms-2"
                            >
                                <FaUserPlus className="me-1" />
                                Register
                            </NavItem>
                            <NavItem
                                to="/cart"
                                className="btn btn-outline-dark ms-2"
                            >
                                <BiCartAlt className="me-1" />
                                Cart(0)
                            </NavItem>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
const NavItem = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    color: #000;
`;
const Form = styled.form`
    padding: 10px;
    width: 20%;
    background-color: aliceblue;
    margin-right: 20px;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    appearance: unset;
    &::placeholder {
        font-size: 16px;
    }
`;
export default NavBar;
