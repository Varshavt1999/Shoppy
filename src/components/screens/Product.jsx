import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import { CartState } from "../../context/Store";

function Product() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    console.log(product, "hproductiiiiiiiiiiiiiiiiiiiii");

    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(cart, "cart//////////////////////////////");
    useEffect(() => {
        setLoading(true);
        const getProduct = () => {
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then(function (response) {
                    // handle success
                    setLoading(false);
                    setProduct(response.data);
                    console.log(response.data, "response-single");
                })
                .catch(function (error) {
                    // handle error
                    setLoading(false);
                });
        };
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={40} width={300} />
                    <Skeleton height={60} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <div className="d-flex">
                        <Skeleton height={50} width={100} />
                        <Skeleton
                            height={50}
                            width={100}
                            style={{ marginLeft: 6 }}
                        />
                    </div>
                </div>
            </>
        );
    };
    const RenderProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        height="400px"
                        width="400px"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h4 className="display-5">{product.title}</h4>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}{" "}
                        <BsFillStarFill />
                    </p>
                    <h3 className="display-5 fw-bold my-4 ">
                        ${product.price}
                    </h3>
                    <p className="lead ">{product.description}</p>

                    <ButtonContainer>
                        {product.rating?.count > 0 ? (
                            <div>
                                {console.log(
                                    cart.some((prod) => prod.id === product.id),
                                    "some checking"
                                )}
                                {
                                    //some() help us to check that particular item exist in your array or not - it return a boolean
                                    cart.some(
                                        (prod) => prod.id === product.id
                                    ) ? (
                                        <CartButton
                                            className="btn btn-outline-dark px-4 py-2"
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: product,
                                                });
                                            }}
                                        >
                                            Remove From Cart
                                        </CartButton>
                                    ) : (
                                        <CartButton
                                            className="btn btn-outline-dark px-4 py-2"
                                            onClick={() => {
                                                dispatch({
                                                    type: "ADD_TO_CART",
                                                    payload: product,
                                                });
                                            }}
                                        >
                                            Add To Cart
                                        </CartButton>
                                    )
                                }
                            </div>
                        ) : (
                            <div>
                                <CartButton className="btn btn-outline-dark px-4 py-2 out-of-stock">
                                    Out Of Stock
                                </CartButton>
                            </div>
                        )}

                        <Button
                            to="/cart"
                            className="btn btn-outline-dark ms-2 px-3 py-2"
                        >
                            Go To Cart
                        </Button>
                    </ButtonContainer>
                </div>
            </>
        );
    };
    return (
        <div className="wrapper p-5  ">
            <div className="row py-5">
                {loading ? <Loading /> : <RenderProduct />}
            </div>
        </div>
    );
}
const ButtonContainer = styled.div`
    display: flex;
`;
const CartButton = styled.button`
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    color: #000;
    margin-right: 30px;
    &.out-of-stock {
        background-color: red;
    }
`;
const Button = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    color: #000;
    margin-right: 30px;
`;
export default Product;
