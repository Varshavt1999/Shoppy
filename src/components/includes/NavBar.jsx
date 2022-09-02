import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-4" href="#">
                        Shopping Cart.
                    </a>
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
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Products
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <div className="buttons">
                            {/* 

                            ms  = margin-left 
                            me = margin-right

                            */}

                            <a href="" className="btn btn-outline-dark">
                                <BiLogIn className="me-1" /> Login
                            </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <FaUserPlus className="me-1" />
                                Register
                            </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <BiCartAlt className="me-1" />
                                Cart(0)
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
