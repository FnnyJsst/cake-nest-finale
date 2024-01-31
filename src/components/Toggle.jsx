import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toggle({ label, toggled, onClick}) {
    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
        toast.info(isToggled ? null : "Mode admin activé ")
    }
    return (
        <ToggleStyled>
            <label>
                <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span >
                <p>{isToggled ? "Désactiver le mode admin" : "Activer le mode admin"}</p>
                </span>
            </label>
            <ToastContainer position="bottom-right" theme="dark"/>
        </ToggleStyled>
    )
}

const ToggleStyled = styled.div`

    margin-right: 5vh;
    
    label {
        position: relative;
        display: inline-block;
        width: 22vh;;
        height: 30px;
        color: ${theme.colors.primary};
        font-family: "Open Sans", sans-serif;
        font-size: ${theme.fonts.size.XXXS};
    
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.3s;
        cursor: pointer;
        background: #2c3e50;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    span:before {
        position: absolute;
        content: "";
        height: 23px;
        width: 23px;
        left: 4px; 
        bottom: 3px;
        background-color: ${theme.colors.primary};
        border-radius: 50%;
        transition: 0.3s;
    }
    

        input:checked + span {
            background-color: ${theme.colors.white};
            border: 1px solid ${theme.colors.primary};
        }


        input:checked + span:before {
            transform: translateX(125px);
        }

        p {
            margin-left: 4vh;
        }
    `