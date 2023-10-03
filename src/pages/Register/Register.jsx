import React, { useState } from 'react'
import './register.scss'
import { Container, FormControl } from 'react-bootstrap'
import { AppBar, Box, Checkbox, FormControlLabel, FormHelperText, Input, InputLabel, NativeSelect, Tab, Tabs, TextareaAutosize } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs'
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react'
import svg from '../../assets/logos/genetic-data-svgrepo-com.svg'
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
const Register = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className='register_wrapper' style={{ backgroundColor: 'white' }}>
            <Breadcrumbs />
            <Box sx={{ bgcolor: 'background.paper', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '20px' }}>
                <AppBar position="static" className='wrapper'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label={"მაძიებელს"} {...a11yProps(0)} />
                        <Tab label={"ორგანიზაციას"} {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <form style={{ width: '100%' }}>
                        <div className='sectionOfInput' style={{ position: 'relative' }}>
                            <InputLabel>პირადი ნომერი</InputLabel>
                            <FormControl required type='number' />
                            <img
                                src={svg} // Replace with the actual path to your image
                                alt="Icon"
                                style={{ position: 'absolute', width: 25, left: '93%', top: '46%' }} // Adjust positioning as needed
                            />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>დაბადების თარიღი</InputLabel>
                            <FormControl type='date' />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მუნიციპალიტეტი
                            </InputLabel>
                            <NativeSelect
                                fullWidth
                                defaultValue={0}
                                inputProps={{
                                    name: 'მუნიციპალიტეტი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>ელექტრონული ფოსტა</InputLabel>
                            <FormControl type='email' />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>მომხმარებლის სახელი</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>პაროლი</InputLabel>
                            <FormControl type='password' aria-describedby="my-helper-text" />
                        </div>
                        <div className='register_submit_wrapper'>
                            <button type='submit' className='register'>
                                <Link to={'privacy'}>შემდეგ</Link>
                            </button>
                        </div>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <form style={{ width: '100%' }}>
                        <div className='sectionOfInput' style={{position:'relative'}}>
                            <InputLabel>საიდენტიფიკაციო კოდი</InputLabel>
                            <FormControl type='number' />
                            <img
                                src={svg} // Replace with the actual path to your image
                                alt="Icon"
                                style={{ position: 'absolute', width: 25, left: '93%', top: '46%' }} // Adjust positioning as needed
                            />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>დასახელება</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>ობიექტის სახელი</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                კომპანიის შესახებ
                            </InputLabel>
                            <TextareaAutosize className='w-100' placeholder='კომპანიის შესახებ' />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                სექტორი
                            </InputLabel>
                            <NativeSelect
                                fullWidth
                                defaultValue={0}
                                inputProps={{
                                    name: 'მუნიციპალიტეტი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მუნიციპალიტეტი
                            </InputLabel>
                            <NativeSelect
                                fullWidth
                                defaultValue={0}
                                inputProps={{
                                    name: 'მუნიციპალიტეტი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>ფაქტობრივი მისამართი</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                საქმიანობის სფერო
                            </InputLabel>
                            <NativeSelect
                                fullWidth
                                defaultValue={0}
                                inputProps={{
                                    name: 'მუნიციპალიტეტი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <h3 className='w-100' style={{ textAlign: 'center' }}>საკონტაქტო პირი</h3>
                        <div className='sectionOfInput'>
                            <InputLabel>სახელი</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>გვარი</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>პოზიცია</InputLabel>
                            <FormControl />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>ელექტრონული ფოსტა</InputLabel>
                            <FormControl type='email' />
                        </div>
                        <div className='sectionOfInput'>
                            <InputLabel>მობ. ნომერი</InputLabel>
                            <FormControl type='number' />
                        </div>
                        <div className='register_submit_wrapper'>
                            <button type='submit' className='register'>
                                <Link to={'privacy'}>შემდეგ</Link>
                            </button>
                        </div>
                    </form>
                </TabPanel>
            </Box>


        </Container>
    )
}

export default Register