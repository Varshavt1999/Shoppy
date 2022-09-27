import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

function Product() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    console.log(product, "hproductiiiiiiiiiiiiiiiiiiiii");
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
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add To Cart
                    </button>
                    <Button
                        to="/cart"
                        className="btn btn-outline-dark ms-2 px-3 py-2"
                    >
                        Go To Cart
                    </Button>
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
const Button = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    color: #000;
`;
export default Product;
