import React, { useState } from "react";
import styled from "styled-components";
import { CartState } from "../../context/Store";
import { BiCheck } from "react-icons/bi";

import Rating from "./Rating";
import { useEffect } from "react";

function FilterProductsModal({ isFilterModal, transformProducts }) {
    const { state, dispatch } = CartState();
    const {
        filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
        filterDispatch,
    } = CartState();

    return (
        <MainContainer className={isFilterModal ? "active" : ""}>
            <FilterItem
                onClick={() =>
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })
                }
            >
                <Check className={sort === "lowToHigh" ? "active" : ""}>
                    <BiCheck className="tick-icon" />
                </Check>
                Ascending
            </FilterItem>
            <FilterItem
                onClick={() =>
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow",
                    })
                }
            >
                <Check className={sort === "highToLow" ? "active" : ""}>
                    <BiCheck className="tick-icon" />
                </Check>
                Descending
            </FilterItem>
            <FilterItem
                onClick={() =>
                    filterDispatch({
                        type: "FILTER_BY_STOCK",
                    })
                }
            >
                <Check className={byStock ? "active" : ""}>
                    <BiCheck className="tick-icon" />
                </Check>
                Include Out Of Stock
            </FilterItem>
            <FilterItem
                onClick={() =>
                    filterDispatch({
                        type: "FILTER_BY_DELIVERY",
                    })
                }
            >
                <Check className={byFastDelivery ? "active" : ""}>
                    <BiCheck className="tick-icon" />
                </Check>
                Fast Delivery Only
            </FilterItem>
            <FilterItem className="filter">
                Rating :
                <Rating rating={byRating} style={{ cursor: "pointer" }} />
            </FilterItem>
            <Button
                onClick={() =>
                    filterDispatch({
                        type: "CLEAR_FILTER",
                    })
                }
            >
                Clear All Filters
            </Button>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background-color: blanchedalmond;
    padding: 0 20px;
    border: 1px solid #000;
    border-radius: 4px;
    z-index: 10;
    position: absolute;
    transform: scale(0, 0);
    transition: all 0.6s ease;
    width: 300px;
    &.active {
        top: 50px;
        right: 0;

        opacity: 1;
        transition: all 0.6s ease;
        transform: scale(1, 1);
    }
    color: #000 !important;
    &:hover {
        color: #000 !important;
    }
`;
const FilterItem = styled.div`
    padding: 15px 0 15px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    /* &.filter {
        display: grid;
        grid-template-columns: 1fr 2fr;
    } */
`;
const Check = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid grey;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
        background-color: blue;
        & .tick-icon {
            display: block;
        }
    }
    & .tick-icon {
        color: #fff !important;
        font-weight: bold;
        display: none;
    }
`;

const Button = styled.div`
    padding: 15px 0 15px;
`;
export default FilterProductsModal;
