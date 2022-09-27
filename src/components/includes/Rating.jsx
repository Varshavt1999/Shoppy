import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Rating({ rating, onClick, style, setRate }) {
    return (
        <Stars>
            {/* <Star>
                <BsFillStarFill />
            </Star>
            <Star>
                <BsFillStarFill />
            </Star>
            <Star>
                <BsFillStarFill />
            </Star>
            <Star>
                <BsFillStarFill />
            </Star> */}
            {[...Array(5)].map((_, index) => (
                <span key={index} onClick={() => onClick(index)} style={style}>
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
