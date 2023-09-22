import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import InfoCard from '../../../ReusableComponents/infocard/InfoCard';
import "../../media/news/News.scss"
import ActiveTabs from '../../../ReusableComponents/activeTabs/ActiveTabs';
import { AppBar, Box, Tab, Tabs, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import CardsWrap from '../../../ReusableComponents/CardsWrap/CardsWrap';
import NonPaginated from '../../../ReusableComponents/CardsWrap/NonPaginated';

const tabs = [
  {
    id: 1, label: 'აქტიური', children:
      [
        <InfoCard id={1} date={'აგვ. 23, 2023'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={2} date={'აგვ. 23, 2023'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={2} date={'აგვ. 23, 2023'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={3} date={'აგვ. 23, 2023'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        
      ]
  },
  {
    id: 2, label: 'შესრულებული', children:
      [
        <InfoCard id={'shes/4'} date={'აგვ. 23, 2023'} heading={'პროექტები 4'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/5'} date={'აგვ. 23, 2023'} heading={'პროექტები 5'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/6'} date={'აგვ. 23, 2023'} heading={'პროექტები 6'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/7'} date={'აგვ. 23, 2023'} heading={'პროექტები 7'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      ]
  },

]

const yearsFilterTabs = [
  {
    id: 1, label: '2019', children:
      [
        <InfoCard id={'shes/8'} date={'აგვ. 23, 2019'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/9'} date={'აგვ. 23, 2019'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/10'} date={'აგვ. 23, 2019'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/11'} date={'აგვ. 23, 2019'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
      ]
  },
  {
    id: 2, label: '2018', children:
      [
        <InfoCard id={'shes/11'} date={'აგვ. 23, 2018'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/21'} date={'აგვ. 23, 2018'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/31'} date={'აგვ. 23, 2018'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/41'} date={'აგვ. 23, 2018'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
      ]
  },
  {
    id: 3, label: '2017', children:
      [
        <InfoCard id={'shes/31'} date={'აგვ. 23, 2017'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/32'} date={'აგვ. 23, 2017'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />
      ]
  },
  {
    id: 4, label: '2016', children:
      [
        <InfoCard id={'shes/31'} date={'აგვ. 23, 2016'} heading={'პროექტები 1'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/32'} date={'აგვ. 23, 2016'} heading={'პროექტები 2'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/33'} date={'აგვ. 23, 2016'} heading={'პროექტები 3'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/34'} date={'აგვ. 23, 2016'} heading={'პროექტები 4'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/35'} date={'აგვ. 23, 2016'} heading={'პროექტები 5'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/36'} date={'აგვ. 23, 2016'} heading={'პროექტები 6'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/34'} date={'აგვ. 23, 2016'} heading={'პროექტები 7'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/35'} date={'აგვ. 23, 2016'} heading={'პროექტები 8'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
        <InfoCard id={'shes/36'} date={'აგვ. 23, 2016'} heading={'პროექტები 9'} thumbText={'დაინტერესების შემთხვევაში, გთხოვთ, ელექტრონული ფოსტის მისამართზე'} />,
      ]
  }
]
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{width: '100%'}}
    >
      {value === index && (
        <Box sx={{ rowGap: '20px', p: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const Projects = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className='pr' style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs></Breadcrumbs>
      <NonPaginated>
        <Box sx={{ bgcolor: 'background.paper', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '20px' }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label} {...a11yProps(tab.id - 1)} />
              ))}
            </Tabs>
          </AppBar>
          <div className='tab_wrap'>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <CardsWrap>{tabs[0].children.map((child, index) => (
                <div className='card_wrap' key={index}>{child}</div>
              ))}</CardsWrap>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ActiveTabs tabs={yearsFilterTabs} />
            </TabPanel>
          </div>
        </Box>
        {/* <ActiveTabs tabs={tabs} /> */}
      </NonPaginated>
    </Container>

  )
}

export default Projects

