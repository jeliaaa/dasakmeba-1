import { AppBar, Box, Tab, Tabs, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import '../../../../ReusableComponents/activeTabs/activeTabs.scss'
import { Container } from 'react-bootstrap';
import StatisticsCab from '../stats/Statistics';
import MyVacancies from '../MyVacancies';
import { Link } from 'react-router-dom';


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
const VacancyAdd = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container style={{ backgroundColor: '#fff', padding: 20 }}>
            <div className='active_tabs_wrapper'>
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
                            <Tab label={'ვაკანსია'} {...a11yProps(0)} />
                            <Tab label={'საგანმანათლებლო პროგრამები'} {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <button><Link to={'vacAdd'}>დამატება</Link></button>
                        <StatisticsCab />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <button><Link to={'eduAdd'}>დამატება</Link></button>
                        <MyVacancies />
                    </TabPanel>

                </Box>
            </div>
        </Container>
    )
}

export default VacancyAdd

