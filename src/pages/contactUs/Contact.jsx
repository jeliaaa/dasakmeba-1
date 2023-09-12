
import { AppBar, Box, Tab, Tabs, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
import mapImg from '../../assets/map/map.png'
import './contact.scss'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='tab-panel'
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
const Contact = ({ tabs }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <div className='active_tabs_wrapper'>
      <Breadcrumbs />
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
            <Tab label={'ბათუმი'} {...a11yProps(0)} />
            <Tab label={'ქობულეთი'} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel  value={value} index={0} dir={theme.direction}>
          <div className='region_details'>
            <div className='address'>
              <h5>მისამართი : ჯავახიშვილის 70/72</h5>
            </div>
            <div className='time'>
              <i className='fa-solid fa-clock' />
              <p>09:00 - 18:00</p>
            </div>
            <div className='contacts'>
              <p>info@hradjara.gmail.com</p>
              <p>555-55-55-55</p>
            </div>
          </div>
          <div className="map_wrapper">
            <img src={mapImg} alt="..." />
          </div>
        </TabPanel>
        <TabPanel  value={value} index={1} dir={theme.direction}>
          <div className='region_details'>
            <div className='address'>
              <h5>მისამართი : აღმაშენებლის 70/72</h5>
            </div>
            <div className='time'>
              <i className='fa-solid fa-clock' />
              <p>09:00 - 18:00</p>
            </div>
            <div className='contacts'>
              <p>info@hradjara.gmail.com</p>
              <p>555-55-55-55</p>
            </div>
          </div>
          <div className="map_wrapper">
            <img src={mapImg} alt="..." />
          </div>
        </TabPanel>
        
      </Box>
    </div>
  )
}

export default Contact


// import React from 'react'
// import { Container } from 'react-bootstrap';
// import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs';
// import mapImg from '../../assets/map/map.png'
// import './contact.scss'
// const Contact = () => {
//   return (
//     <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
//       <Breadcrumbs></Breadcrumbs>
//       <div className="map_wrapper">
//         <img src={mapImg} alt="..." />
//         <div className='building_img_wrapper'>
//           <p>Address: Batumi, Javakhishvili str. 70/72</p>
//         </div>
//       </div>
//       <div>+995 422 24 78 82</div>
//     </Container>

//   )
// }

// export default Contact