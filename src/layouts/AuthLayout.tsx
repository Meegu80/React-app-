import styled from "styled-components";
import {Outlet} from "react-router";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    background-color: ${({theme}) => theme.color.background};
`;

function AuthLayout() {
    return (
        <Wrapper>
            <Outlet/>
        </Wrapper>
    );
}

export default AuthLayout;
