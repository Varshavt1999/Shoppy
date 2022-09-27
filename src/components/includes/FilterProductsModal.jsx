import React, { useState } from "react";
import styled from "styled-components";

import Rating from "./Rating";

function FilterProductsModal({ isFilterModal }) {
    const [rate, setRate] = useState(3);
    return (
        <MainContainer className={isFilterModal ? "active" : ""}>
            <FilterItem>
                <Check></Check>
                Ascending
            </FilterItem>
            <FilterItem>
                <Check></Check>
                Descending
            </FilterItem>
            <FilterItem>
                <Check></Check>
                Include Out Of Stock
            </FilterItem>
            <FilterItem>
                <Check></Check>
                Fast Delivery Only
            </FilterItem>
            <FilterItem className="filter">
                Rating :
                <Rating
                    rating={rate}
                    onClick={(index) => setRate(index + 1)}
                    style={{ cursor: "pointer" }}
                />
            </FilterItem>
            <Button>Clear All Filters</Button>
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
    &.filter {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`;
const Check = styled.div``;

const Button = styled.div`
    padding: 15px 0 15px;
`;
export default FilterProductsModal;
