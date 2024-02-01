import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <TabsStyled>
  <div>
    <TabList>
      <Tab className="tab1" onClick={() => setSelectedTab(0)} selected={selectedTab === 0}>
        +
      </Tab>
      <Tab onClick={() => setSelectedTab(1)} selected={selectedTab === 1}>
        + Ajouter un élément
      </Tab>
      <Tab onClick={() => setSelectedTab(2)} selected={selectedTab === 2}>
        + Modifier un élément
      </Tab>
    </TabList>
    {selectedTab === 0 && <TabPanel className='tabpanel'></TabPanel>}
    {selectedTab === 1 && <TabPanel className='tabpanel'></TabPanel>}
    {selectedTab === 2 && <TabPanel className='tabpanel'></TabPanel>}
  </div>
</TabsStyled>
  );
};

export default TabsComponent;

const TabsStyled = styled.div`
  background-color: transparent !important;

  bottom: 0;
  width: 100%;
   // Ajout pour occuper toute la largeur
  
  .tab1 {
    margin-left: 20px;
    width: 50px;
    height: 50px;
  }
`;

const TabList = styled.div`
  display: flex;
  background-color: white;
  position: relative;
  border-bottom: 1px solid ${theme.colors.greyLight};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button`
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.greySemiDark};
  font-family: "Open Sans", sans-serif;
  font-size: ${theme.fonts.size.XXS};
  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'silver')};
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  width: 20vh;
  
`;

const TabPanel = styled.div`
  background-color: white;
  height: ${props => (props.selected ? '150px' : '70px')}; // Ajustez la hauteur en fonction de vos besoins
  overflow: auto;
  transition: height 0.3s; 
`;
