import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { Resizable } from 're-resizable';

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabsStyled>
      <Resizable>
      <TabList>
        <Tab onClick={() => setSelectedTab(0)} selected={selectedTab === 0}>
          +</Tab>
        <Tab onClick={() => setSelectedTab(0)} selected={selectedTab === 0}>
          Ajouter un élément
        </Tab>
        <Tab onClick={() => setSelectedTab(1)} selected={selectedTab === 1}>
          Modifier un élément
        </Tab>
      </TabList>

      {selectedTab === 0 && <TabPanel></TabPanel>}
      {selectedTab === 1 && <TabPanel></TabPanel>}
      {selectedTab === 2 && <TabPanel></TabPanel>}
      </Resizable>
    </TabsStyled>
  );
};

export default TabsComponent;

const TabsStyled = styled.div`
  background-color: white;
`;

const TabList = styled.div`
  display: flex;
`;

const Tab = styled.button`
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.greySemiDark};
  font-family: "Open Sans", sans-serif;
  font-size: ${theme.fonts.size.XXS};
  background-color: ${props => (props.selected ? 'black' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
`;

const TabPanel = styled.div`
  background-color: white;
  height: 70px;
  overflow: auto;
`;