import React from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

import NavBar from "../includes/NavBar";

function Index() {
    return (
        <MainContainer>
            <NavBar />
            {/* <InnerContainer>
                <LeftContainer>
                    <SideBar />
                </LeftContainer>
                <RightContainer>
                    <Outlet />
                </RightContainer>
            </InnerContainer> */}
        </MainContainer>
    );
}

const MainContainer = styled.div``;
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
