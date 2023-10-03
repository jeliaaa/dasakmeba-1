import { AppBar, Box, Tab, Tabs, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'
import './activeTabs.scss'
import CardsWrap from '../CardsWrap/CardsWrap';
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
const ActiveTabs = ({ tabs }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);
    return (
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
                        {tabs.map((tab, index) => (
                            <Tab key={index} label={tab.label} {...a11yProps(tab.id - 1)} />
                        ))}
                    </Tabs>
                </AppBar>
                {tabs.map((tab, index) => (
                    <TabPanel key={index} value={value} index={tab.id - 1} dir={theme.direction}>
                        <CardsWrap>
                            {tab.children.map((child, index) => (
                                <div className='card_wrap' key={index}>{child}</div>
                            ))}
                        </CardsWrap>
                    </TabPanel>
                ))}
            </Box>
        </div>
    )
}

export default ActiveTabs