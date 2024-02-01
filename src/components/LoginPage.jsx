import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from "../theme";

export default function LoginPage () {

    return (
        <>
            <LoginPageStyles>
                <LoginPageSpan>
                    <h1>CAKE</h1>
                    <img src="/images/cupcake.png" alt="cupcake" />
                    <h1>NEST</h1>
                </LoginPageSpan>
                <LoginForm />
            </LoginPageStyles>
        </>
    )
}

const LoginPageStyles = styled.div`
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/tarts.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
`

const LoginPageSpan = styled.span`
    color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.spacing.xxl};
    padding-bottom: ${theme.spacing.xl};

    h1 {
        font-family: sans-serif;
        font-size: ${theme.fonts.size.P5};
    }

    img {
        width: 50px;
    }
    `