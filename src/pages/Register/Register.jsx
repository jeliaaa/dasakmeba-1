import React, { useState } from 'react'
import './register.scss'
import { Container } from 'react-bootstrap'
import { AppBar, Box, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, NativeSelect, Tab, Tabs, TextareaAutosize } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs'
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react'
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
                        <FormControl required>
                            <InputLabel>პირადი ნომერი</InputLabel>
                            <Input type='number' />
                        </FormControl>
                        <FormControl required>
                            <InputLabel>დაბადების თარიღი</InputLabel>
                            <Input style={{ marginTop: '40px' }} type='date' />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მუნიციპალიტეტი
                            </InputLabel>
                            <NativeSelect
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
                        </FormControl>
                        <FormControl>
                            <InputLabel>ელექტრონული ფოსტა</InputLabel>
                            <Input type='email' />
                        </FormControl>
                        <FormControl required>
                            <InputLabel>მომხმარებლის სახელი</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl required>
                            <InputLabel>პაროლი</InputLabel>
                            <Input type='password' aria-describedby="my-helper-text" />
                        </FormControl>
                        <div className='register_submit_wrapper'>
                            <button type='submit' className='register'>
                                <Link to={'privacy'}>შემდეგ</Link>
                            </button>
                        </div>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <form style={{ width: '100%' }}>
                        <FormControl required>
                            <InputLabel>საიდენტიფიკაციო კოდი</InputLabel>
                            <Input type='number' />
                        </FormControl>
                        <FormControl required>
                            <InputLabel>დასახელება</InputLabel>
                            <Input/>
                        </FormControl>
                        <FormControl required>
                            <InputLabel>ობიექტის სახელი</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl required>
                            <TextareaAutosize placeholder='კომპანიის შესახებ' />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                სექტორი
                            </InputLabel>
                            <NativeSelect
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
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მუნიციპალიტეტი
                            </InputLabel>
                            <NativeSelect
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
                        </FormControl>
                        <FormControl required>
                            <InputLabel>ფაქტობრივი მისამართი</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                საქმიანობის სფერო
                            </InputLabel>
                            <NativeSelect
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
                        </FormControl>
                        <h3 style={{textAlign:'center'}}>საკონტაქტო პირი</h3>
                        <FormControl>
                            <InputLabel>სახელი</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>გვარი</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>პოზიცია</InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>ელექტრონული ფოსტა</InputLabel>
                            <Input type='email' />
                        </FormControl>
                        <FormControl>
                            <InputLabel>მობ. ნომერი</InputLabel>
                            <Input type='number' />
                        </FormControl>
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