import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tabs.scss'
import { Dropdown } from 'react-bootstrap';

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

const TabMenu = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState('');
    const [valueOfMonth, setValueOfMonth] = React.useState('201804');


    return (
        <div className='tabs_wrapper'>
            <Box sx={{ bgcolor: 'background.paper', width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
                <AppBar position="static" className='dropsMenu'>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {value ? value : 'წელი' }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { setValue('2016'); setValueOfMonth('2016') }}>2016</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setValue('2017'); setValueOfMonth('2017') }}>2017</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setValue('2018'); setValueOfMonth('2018') }}>2018</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setValue('2019'); setValueOfMonth('2019') }}>2019</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            კვარტალი 1
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}01`)}>მთლიანად</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}jan`)}>იანვარი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}feb`)}>თებერვალი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}mar`)}>მარტი</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            კვარტალი 2
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}02`)}>მთლიანად</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}apr`)}>აპრილი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}may`)}>მაისი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}jun`)}>ივნისი</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            კვარტალი 3
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}03`)}>მთლიანად</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}jul`)}>ივლისი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}aug`)}>აგვისტო</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}sep`)}>სექტემბერი</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            კვარტალი 4
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}04`)}>მთლიანად</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}oct`)}>ოქტომბერი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}nov`)}>ნოემბერი</Dropdown.Item>
                            <Dropdown.Item onClick={() => setValueOfMonth(`${value}dec`)}>დეკემბერი</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </AppBar>

                <TabPanel value={valueOfMonth} index={'2016'} dir={theme.direction}>
                    2016
                    <img className='w-100' src='https://picsum.photos/1000/500' alt='...' />
                </TabPanel>
                {/*2016*/}
                <TabPanel value={valueOfMonth} index={'201601'} dir={theme.direction}>
                    2016 kv1
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016jan'} dir={theme.direction}>
                    2016 jan
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016feb'} dir={theme.direction}>
                    2016 feb
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016mar'} dir={theme.direction}>
                    2016 mar
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201602'} dir={theme.direction}>
                    2016 kv2
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016apr'} dir={theme.direction}>
                    2016 apr
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016may'} dir={theme.direction}>
                    2016 may
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016jun'} dir={theme.direction}>
                    2016 jun
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201603'} dir={theme.direction}>
                    2016 kv3
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016jul'} dir={theme.direction}>
                    2016 jul
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016aug'} dir={theme.direction}>
                    2016 aug
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016sep'} dir={theme.direction}>
                    2016 sep
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201604'} dir={theme.direction}>
                    2016 kv4
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016oct'} dir={theme.direction}>
                    2016 oct
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016nov'} dir={theme.direction}>
                    2016 nov
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2016dec'} dir={theme.direction}>
                    2016 dec
                </TabPanel>
                {/* -2016*/}
                <TabPanel value={valueOfMonth} index={'2017'} dir={theme.direction}>
                    2017
                </TabPanel>
                {/* 2017 */}
                <TabPanel value={valueOfMonth} index={'201701'} dir={theme.direction}>
                    2017 kv1
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017jan'} dir={theme.direction}>
                    2017 jan
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017feb'} dir={theme.direction}>
                    2017 feb
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017mar'} dir={theme.direction}>
                    2017 mar
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201702'} dir={theme.direction}>
                    2017 kv2
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017apr'} dir={theme.direction}>
                    2017 apr
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017may'} dir={theme.direction}>
                    2017 may
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017jun'} dir={theme.direction}>
                    2017 jun
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201703'} dir={theme.direction}>
                    2017 kv3
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017jul'} dir={theme.direction}>
                    2017 jul
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017aug'} dir={theme.direction}>
                    2017 aug
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017sep'} dir={theme.direction}>
                    2017 sep
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201704'} dir={theme.direction}>
                    2017 kv4
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017oct'} dir={theme.direction}>
                    2017 oct
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017nov'} dir={theme.direction}>
                    2017 nov
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2017dec'} dir={theme.direction}>
                    2017 dec
                </TabPanel>
                {/* -2017 */}
                <TabPanel value={valueOfMonth} index={'2018'} dir={theme.direction}>
                    2018
                </TabPanel>
                {/* 2018 */}
                <TabPanel value={valueOfMonth} index={'201801'} dir={theme.direction}>
                    2018 kv1
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018jan'} dir={theme.direction}>
                    2018 jan
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018feb'} dir={theme.direction}>
                    2018 feb
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018mar'} dir={theme.direction}>
                    2018 mar
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201802'} dir={theme.direction}>
                    2018 kv2
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018apr'} dir={theme.direction}>
                    2018 apr
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018may'} dir={theme.direction}>
                    2018 may
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018jun'} dir={theme.direction}>
                    2018 jun
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201803'} dir={theme.direction}>
                    2018 kv3
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018jul'} dir={theme.direction}>
                    2018 jul
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018aug'} dir={theme.direction}>
                    2018 aug
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018sep'} dir={theme.direction}>
                    2018 sep
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'201804'} dir={theme.direction}>
                    2018 kv4
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018oct'} dir={theme.direction}>
                    2018 oct
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018nov'} dir={theme.direction}>
                    2018 nov
                </TabPanel>
                <TabPanel value={valueOfMonth} index={'2018dec'} dir={theme.direction}>
                    2018 dec
                </TabPanel>
            </Box>
        </div>
    );
}
export default TabMenu