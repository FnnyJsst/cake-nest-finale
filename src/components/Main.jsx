import styled from "styled-components"
import Cart from "./Cart";
import { fakeMenu } from "../fakeData/fakeMenu";
import { useState } from "react";

export default function Main() {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;

    fakeMenu.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
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
   `

const CartContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`