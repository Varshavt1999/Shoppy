import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsFilter } from "react-icons/bs";
import FilterProductsModal from "../includes/FilterProductsModal";
import { CartState } from "../../context/Store";
import { useContext } from "react";
import Rating from "../includes/Rating";

function Products() {
    // destructure all keys in context
    //-------------------------------------
    const { state, dispatch } = CartState();
    console.log(state.products, "context_state");

    // ====================================

    //  destructure specific key in context
    //  -------------------------------------
    // const {
    //     state: { products },
    //     dispatch,
    // } = CartState();
    // console.log(products, "context_state_speific");

    const axios = require("axios").default;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFilterModal, setIsFilterModal] = useState(false);
    console.log(data, ",,,,,,,,,,,,,,,,,,,,,,,");
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                // handle success
                console.log(response, "............................");
                console.log(response.data, "data");
                setData(response.data);
                setLoading(false);
                dispatch({
                    type: "UPDATE_PRODUCTS",
                    payload: response.data,
                });
                console.log(state.products, "store-products");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false);
            });
    }, []);
    const Loading = () => {
        return (
            <div className="d-flex justify-content-between">
                <div className="col-md-3 me-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3 me-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3 me-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3 ">
                    <Skeleton height={350} />
                </div>
            </div>
        );
    };
    const FilterProducts = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        dispatch({
            type: "UPDATE_PRODUCTS",
            payload: updatedList,
        });
    };
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons mb-4">
                    <button
                        className="btn btn-outline-dark me-3"
                        onClick={() =>
                            dispatch({
                                type: "UPDATE_PRODUCTS",
                                payload: data,
                            })
                        }
                    >
                        All
                    </button>
                    <button
                        className="btn btn-outline-dark me-3"
                        onClick={() => FilterProducts("men's clothing")}
                    >
                        Men's Clothing
                    </button>
                    <button
                        className="btn btn-outline-dark me-3"
                        onClick={() => FilterProducts("women's clothing")}
                    >
                        Women's Clothing
                    </button>
                    <button
                        className="btn btn-outline-dark me-3"
                        onClick={() => FilterProducts("jewelery")}
                    >
                        Jewelery
                    </button>
                    <button
                        className="btn btn-outline-dark  me-3 "
                        onClick={() => FilterProducts("electronics")}
                    >
                        Electronics
                    </button>
                    <ButtonOuterBox>
                        <Button
                            className="btn btn-outline-dark "
                            onClick={() => setIsFilterModal(!isFilterModal)}
                        >
                            More Filter <BsFilter />
                        </Button>
                        <FilterProductsModal isFilterModal={isFilterModal} />
                    </ButtonOuterBox>
                </div>

                {state.products?.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div class="card h-100 text-center p-4 ">
                                <img
                                    src={product.image}
                                    class="card-img-top"
                                    alt={product.title}
                                    height="250px"
                                />

                                <div class="card-body">
                                    <h5 class="card-title ">
                                        {product.title.substring(0, 12)}...
                                    </h5>
                                    <p class="card-text lead fw-bold">
                                        ${product.price}
                                    </p>

                                    {product.price > 200 ? (
                                        <Delivery>Fast Delivery</Delivery>
                                    ) : (
                                        <Delivery>4 Days Delivery</Delivery>
                                    )}
                                    <RatingBox>
                                        <Rating rating={product.rating.rate} />
                                    </RatingBox>
                                    <NavItem
                                        to={`/products/${product.id}`}
                                        class="btn btn-outline-dark"
                                    >
                                        Buy Now
                                    </NavItem>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center ">
                            Latest products
                        </h1>
                        <hr className="mb-5" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}
const NavItem = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 8px;
    border-radius: 4px;
    &:hover {
        -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.75);
        color: #fff;
        background-color: #000;
    }
`;
const ButtonOuterBox = styled.button`
    position: relative;
    border: none;
    outline: none;
`;
const Button = styled.div``;
const Delivery = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
const RatingBox = styled.div`
    width: 80%;
    margin: 0 auto 10px;
`;
export default Products;
