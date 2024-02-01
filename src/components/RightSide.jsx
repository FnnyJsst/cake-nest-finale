import Profile from "./Profile";
import Toggle from "./Toggle";
import styled from "styled-components";
import { useAdmin } from './admin/AdminContext';

export default function RightSide({ username }) {
    const { isAdmin, toggleAdminStatus } = useAdmin();

    return (
        <RightSideStyles>
            <Toggle
                label="Activer le mode admin"
                toggled={isAdmin}
                onClick={toggleAdminStatus} />
            <Profile username={username}  />
        </RightSideStyles>
    );
}

const RightSideStyles = styled.div`
    display: flex;
    flex-direction: row;`