import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CartState } from "../../context/Store";

function Rating({ rating, onClick, style }) {
    const {
        filterState: { byStock, byFastDelivery, searchQuery },
        filterDispatch,
    } = CartState();
    // console.log(byStock, byFastDelivery, searchQuery);
    return (
        <Stars>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    onClick={() =>
                        filterDispatch({
                            type: "FILTER_BY_RATING",
                            payload: index + 1,
                        })
                    }
                    style={style}
                >
                    {rating > index ? <FaStar /> : <FaRegStar />}
                </span>
            ))}
        </Stars>
    );
}
//empty array of 5 values  - [...Array(5)]

const Stars = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export default Rating;
