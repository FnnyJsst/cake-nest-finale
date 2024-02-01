import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handlechange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
    };

    return (
        <LoginFormStyles onSubmit={handleSubmit}>
            <h2>Bienvenue chez nous !</h2>
            <hr />
            <h3>Connectez-vous</h3>
            <InputGroup >
                <IconWrapper>
                        <IoPersonCircleOutline className="icon"/>
                </IconWrapper>
                    <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required/>
            </InputGroup>
            <ButtonGroup>
                <button>Mon espace 
                    <IoIosArrowForward className="icon"/>
                </button>
            </ButtonGroup>
        </LoginFormStyles>
    );
}

const LoginFormStyles = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Pacifico", sans-serif;
    display: flex;
    flex-direction: column;

    input {
        height: 40px;
        border: none;
        border-radius: ${theme.borderRadius.round};
        width: 100%;
        padding-left: 10%;
    }

    hr {
        border: 1.56px solid ${theme.colors.loginLine}
    }
    
    h2, h3 {
        color: white;
        font-size: ${theme.fonts.size.P5};
        margin : ${theme.spacing.md};
        width: 100%;

        @font-face {
            font-family: "Pacifico";
            src: url('../../public/Pacifico-Regular.ttf');
        }
    }`

const InputGroup = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    
    .icon {
        color: gray;
    }`

const IconWrapper = styled.div`
    width: 40px;
    position: absolute;
`

const ButtonGroup = styled.div`
    color: white;
  
    button {
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    color: white;
    height: 40px;
    margin-top: ${theme.spacing.md};
    font-size: ${theme.fonts.size.P0};
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    font-weight: semibold;  
    }`