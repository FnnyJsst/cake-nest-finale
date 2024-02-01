import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

const TabsComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Premier onglet</Tab>
        <Tab>Deuxième onglet</Tab>
      </TabList>

      <TabPanel>
        <Link to="/admin/premier-onglet">Aller au Premier onglet</Link>
      </TabPanel>
      <TabPanel>
        <Link to="/admin/deuxieme-onglet">Aller au Deuxième onglet</Link>
      </TabPanel>
    </Tabs>
  );
};

export default TabsComponent;