import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Main from "./Main";

export default function OrderPage(props) {
    const {username} = useParams();

    return (
        <>
            <OrderPageStyled>
                <div className="container">
                    <NavBar username= {username}/> 
                    <Main />
                </div>
            </OrderPageStyled>
        </>
    );
}

const OrderPageStyled = styled.div`
    height: 100vh;
    background-color: ${theme.colors.primary};  
    display: flex;
    justify-content: center;
    align-items: center;
   

    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: ${theme.borderRadius.round};
        box-shadow: 15px 27px 63px -36px rgba(0,0,0,0.7) inset;
        -webkit-box-shadow: 15px 27px 63px -36px rgba(0,0,0,0.7) inset;
        -moz-box-shadow: 15px 27px 63px -36px rgba(0,0,0,0.7) inset;
    }
`