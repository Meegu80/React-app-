import { Outlet } from "react-router";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

type Props = {
    onClick: () => void;
}

function MainLayout({ onClick }: Props) {
    return (
        <Wrapper>
            <Header onClick={onClick}/>
            <Outlet />
            <Footer />
        </Wrapper>
    );
}

export default MainLayout;
