import NavBar from './NavBar';
import { theme } from '../theme';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Main from './Main';
import { useAdmin } from './admin/AdminContext';
import Tabs from './admin/Tabs';

export default function OrderPage() {
//useParams permet de récupérer les paramètres de l'url
  const { username } = useParams();
//useAdmin permet de récupérer les informations du contexte AdminContext
  const { isAdmin, allowedPages } = useAdmin();

  return (
  //isAdmin est un boolean qui permet de savoir si l'utilisateur est admin ou non. Si il est admin, on affiche les tabs
  //&& : si isAdmin est true, on affiche les tabs  
    <OrderPageStyled>
      <div className ='container'>
        <NavBar username={username} />
        <Main />
        {isAdmin && <Tabs allowedPages={allowedPages} />}
      </div>
    </OrderPageStyled>
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
    box-shadow: 15px 27px 63px -36px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 15px 27px 63px -36px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 15px 27px 63px -36px rgba(0, 0, 0, 0.7) inset;
  }
`;