import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../includes/NavBar";
import Home from "./Home";

function Index() {
    return (
        <MainContainer>
            <NavBar />
            <Outlet />
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background-color: #bcd4e6;
`;
const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;
const LeftContainer = styled.div`
    background-color: #36454f;
    border-right: 2px solid #000;
`;
const RightContainer = styled.div``;

export default Index;
