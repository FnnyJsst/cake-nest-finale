import styled from "styled-components"
import { theme } from "../theme"
import { formatPrice } from "../utils/math"

export default function Cart({item}) {

    const formatedprice = formatPrice(item.price)
    return(
        <>
            <CartStyles>
                <img src={item.imageSource} alt={item.title}></img>
                <h4>{item.title}</h4>
                <PriceWrapper>
                    <p>{formatedprice
                    }</p>
                    <button>Ajouter</button>
                </PriceWrapper>
            </CartStyles>
        </>

    )
}

const CartStyles = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    height: 35vh;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 7vh;
    width: 25vh;


    img {
        padding-top: 3vh;;
        width: 25vh;
    }

    h4 {

        font-family: "Pacifico", sans-serif;
        margin-left: 4vh;
        margin-bottom: 3vh;

        @font-face {
            font-family: "Pacifico" ;
            src: url("../../public/Pacifico-Regular.ttf");
        }
        
      
    }
`
const PriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    p {
        color: ${theme.colors.primary};
        font-family: "Open Sans", sans-serif;
        font-size: ${theme.fonts.size.XS};
    }
    
    button {
        background-color: ${theme.colors.primary};
        color: white;
        border: none;
        border-radius: ${theme.borderRadius.round};
        font-size: ${theme.fonts.size.XXXS};
        width: 9vh;
        height: 4vh;
    }`