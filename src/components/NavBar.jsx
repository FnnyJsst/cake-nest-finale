import LeftSide from "./LeftSide"
import Rightside from "./RightSide"
import styled from "styled-components"
import { theme } from "../theme"

export default function Navbar ( {username}) {
 
    return (
        <>  
            <NavBarStyled>
                <LeftSide >
                </LeftSide>
                <Rightside username={username}/>
            </NavBarStyled>
        </>
    )
}

const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 20vh;
    border-bottom: 1px solid #E5E5E5;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 1;
    box-shadow: 0px 10px 70px -5px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 10px 40px -5px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.5);
    border-radius: ${theme.borderRadius.round};`