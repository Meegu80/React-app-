import {Link} from "react-router";
import styled from "styled-components";

const Head = styled.header`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.muted};
`;

const NavLeft = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

type Props = {
    onClick: () => void;
};

function Header({onClick}: Props) {
    return (
        <Head>
            <NavLeft>
                <Logo>Layout Practice</Logo>
                <Nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </Nav>
            </NavLeft>
            <NavRight>
                <Link to={"/auth/login"}>로그인</Link>
                <button onClick={onClick}>테마변경</button>
            </NavRight>
        </Head>
    );
}

export default Header;
