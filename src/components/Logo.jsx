import styled from "styled-components";
import { theme } from "../theme";

export default function Logo() {
    const reloadPage = () => {
        window.location.reload();
    }

    return (
            <LogoStyle onClick = {() => reloadPage()} style={{cursor: "pointer"}}>
                <h1>CAKE</h1>
                <img src="/images/cupcake.png" alt="cake" />
                <h1>NEST</h1>
            </LogoStyle>
    )
}

const LogoStyle = styled.span`
    display: flex;
    color: ${theme.colors.primary};
    flex-direction: row;
    margin-top: 10px;
    margin-left: 10px;

 h1 {
        font-family: sans-serif;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P3};
    }

    img {
        width: 30px;
    }`