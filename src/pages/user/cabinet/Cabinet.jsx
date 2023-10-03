import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import Inbox from './inbox/Inbox'
import Vacancies from './vacancies/Vacancies'
import Statistics from './stats/Statistics'
import MyVacancies from './MyVacancies'
import { useTranslation } from 'react-i18next'
import { AppBar, Box, Tab, Tabs, useTheme } from '@mui/material'
import PropTypes from 'prop-types'
import '../../../ReusableComponents/activeTabs/activeTabs.scss'
import './cabinet.scss'
import VacancyAdd from './vacancyAdd/VacancyAdd'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
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
const Cabinet = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <div className='active_tabs_wrapper cabinet'>
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
              <Tab label={t('inbox')} {...a11yProps(0)} />
              <Tab label={t('vacancies')} {...a11yProps(1)} />
              <Tab label={t('myVacancies')} {...a11yProps(2)} />
              <Tab label={t('statistics')} {...a11yProps(3)} />
              <Tab label={t('დამატება')} {...a11yProps(4)} />
              <Tab label={t('ინტერესები')} {...a11yProps(5)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Inbox />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Vacancies />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <MyVacancies />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Statistics />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <VacancyAdd />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <Statistics />
          </TabPanel>
        </Box>
      </div>
    </Container>
  )
}

export default Cabinet