import styled from "styled-components";

const Foot = styled.footer`
    height: 70px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

function Footer() {
    return <Foot>Copyright 2025 Practice</Foot>
}

export default Footer;