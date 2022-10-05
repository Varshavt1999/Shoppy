import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsFilter } from "react-icons/bs";
import FilterProductsModal from "../includes/FilterProductsModal";
import { CartState } from "../../context/Store";
import { useContext } from "react";
import Rating from "../includes/Rating";
import AddCart from "../../assets/images/add-to-cart.png";
import RemoveCart from "../../assets/images/remove-from-cart.png";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";

function Products() {
    // destructure all keys in context
    //-------------------------------------
    const { state, dispatch } = CartState();
    const {
        filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
        filterDispatch,
    } = CartState();
    // console.log(state, "context_state");

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
    const [a] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFilterModal, setIsFilterModal] = useState(false);
    const [cartState, setCartState] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    // console.log(currentItems, ",currentItems,,,,,,,,,,,,,,,,,,,,,,");

    //======================products api call =================================
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                // handle success
                // console.log(response, "............................");
                // console.log(response.data, "data");
                setData(response.data);
                setLoading(false);
                dispatch({
                    type: "UPDATE_PRODUCTS",
                    payload: response.data,
                });
                // console.log(state.products, "store-products");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false);
            });
    }, []);
    //======================More Filter function =================================
    const transformProducts = () => {
        let sortedproducts = state.products;
        if (sort) {
            sortedproducts = sortedproducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
            console.log(
                sortedproducts,
                "sortedproducts.................................."
            );
            setCurrentItems(sortedproducts);
        }
        if (byRating) {
            sortedproducts = sortedproducts.filter(
                (item) => item.rating.rate >= byRating
            );

            setCurrentItems(sortedproducts);
        }
        if (searchQuery) {
            sortedproducts = sortedproducts.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            );
            setCurrentItems(sortedproducts);
        } else {
            setCurrentItems(state.products);
        }
    };
    useEffect(() => {
        transformProducts();
    }, [sort, byStock, byFastDelivery, byRating, searchQuery, currentItems]);
    //======================More Filter function =================================
    //======================products api call =================================
    //-------------------pagination--------------------------------------------

    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(state.products?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(state.products?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, state.products]);

    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % state.products?.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    //-------------------pagination--------------------------------------------
    //-------------------skelton loader--------------------------------------------
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
    //-------------------skelton loader--------------------------------------------
    //=====================category wise product filter ===========================
    const FilterProducts = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        dispatch({
            type: "UPDATE_PRODUCTS",
            payload: updatedList,
        });
    };
    const Clickedcart = () => {
        alert("Product is added to cart");
    };
    //=====================category wise product filter ===========================
    //-------------------function for rendering products--------------------------------------------
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
                        <FilterProductsModal
                            isFilterModal={isFilterModal}
                            transformProducts={transformProducts}
                        />
                    </ButtonOuterBox>
                </div>

                <ProductsContainer>
                    {console.log(
                        "@@@@@@@@@@@@@@@@@@@@@@@ currentitems",
                        currentItems
                    )}
                    {currentItems?.map((product) => {
                        return (
                            <ProductCard key={product.id}>
                                <TopBox>
                                    <ToCart
                                        onClick={() => {
                                            setCartState(!cartState);
                                            Clickedcart();
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: product,
                                            });
                                        }}
                                        className={cartState ? "active" : ""}
                                    >
                                        <Img
                                            src={AddCart}
                                            alt="add-to-cart"
                                            className="cart"
                                        />
                                    </ToCart>
                                </TopBox>
                                <ProductImgBox>
                                    <ProductImg
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </ProductImgBox>
                                <ProductDetailsBox>
                                    <Title>
                                        {product.title.substring(0, 12)}...
                                    </Title>
                                    <Price>${product.price}</Price>

                                    {product.price > 200 ? (
                                        <Delivery>Fast Delivery</Delivery>
                                    ) : (
                                        <Delivery>4 Days Delivery</Delivery>
                                    )}
                                    <RatingBox>
                                        <Rating rating={product.rating.rate} />
                                    </RatingBox>
                                    <BuyButton to={`/products/${product.id}`}>
                                        Buy Now
                                    </BuyButton>
                                </ProductDetailsBox>
                            </ProductCard>
                        );
                    })}
                </ProductsContainer>
                <PaginationContainer>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-num"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        activeLinkClassName="active"
                    />
                </PaginationContainer>
            </>
        );
    };
    //-------------------function for rendering products--------------------------------------------
    return (
        <div>
            <div className="container py-5">
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
const BuyButton = styled(Link)`
    display: inline-block;
    text-decoration: none;
    background-color: #00416a;
    color: #fff;
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
    width: 100%;
    text-align: center;
`;
const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;
const ProductCard = styled.div`
    border-radius: 8px;
    border: 1px solid #000;
    background-color: azure;
    overflow: hidden;
    padding: 15px;
`;
const ProductImgBox = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    margin-bottom: 15px;
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover;  */
`;
const ProductDetailsBox = styled.div``;
const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;
const Price = styled.h3`
    font-size: 19px;
    font-weight: bold;
    text-align: center;
`;
const ButtonOuterBox = styled.button`
    position: relative;
    border: none;
    outline: none;
    background-color: #bcd4e6;
`;
const Button = styled.div``;
const Delivery = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
const RatingBox = styled.div`
    width: 70%;
    margin: 0 auto 20px;
`;
const TopBox = styled.div`
    margin-bottom: 15px;
`;
const ToCart = styled.div`
    cursor: pointer;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const PaginationContainer = styled.div`
    margin-top: 50px;
    & .pagination {
        list-style: none;
        display: flex;
        justify-content: center;
        font-size: 18px;
        border: 2px solid #00416a;
        background-color: #a1caf1;
        border-radius: 8px;
        padding: 15px;
        width: 50%;
        margin: 0 auto;
        & .page-num {
            padding: 8px 15px;
            margin-right: 10px;
            cursor: pointer;
            font-weight: 600;
            border-radius: 3px;
            text-decoration: none;
            color: #000;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background-color: #00416a;
                color: #fff;
            }
        }
        & .active {
            background-color: #00416a;
            color: #fff;
        }
    }
`;
export default Products;
