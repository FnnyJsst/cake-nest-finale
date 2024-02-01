import styled from "styled-components"
import Cart from "./Cart";
import { fakeMenu } from "../fakeData/fakeMenu";
import { useState } from "react";

export default function Main() {
   
    return (
        <>
            <MainStyled>
                <CartContainerStyles>
                {fakeMenu.map((item, index) => (
                    <Cart key={index} item={item} />
            ))}
                </CartContainerStyles>
            </MainStyled>
        </>
    )
}

const MainStyled = styled.div`
    overflow: auto;
    background-color: white;
    z-index: 1;
   `

const CartContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`