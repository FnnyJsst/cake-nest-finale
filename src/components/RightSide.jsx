import Profile from "./Profile"
import Toggle from "./Toggle"
import styled from "styled-components"

export default function RightSide({ username }) {

    const logState = state => {
        console.log('Toggled:', state)
    }
    return (
        <>
            <RightSideStyles>
                <Toggle
                    label="Activer le mode admin"
                    toggled={true}
                    onClick={logState} />
                <Profile username={username}  />
            </RightSideStyles>
        </>
    )
}

const RightSideStyles = styled.div`
    display: flex;
    flex-direction: row;`