import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Col, Form, Modal, Nav, Row } from 'react-bootstrap';
import { AuthenticationContext } from '../../AuthenticationContext';
import {
    Box,
    Button,
    ChakraProvider,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from '@chakra-ui/react'
const MenuOfNav = (props) => {
    const { signIn, isAuthenticated } = useContext(AuthenticationContext);
    const { t, i18n } = useTranslation();
    const [val, setVal] = useState('');
    const [show, setShow] = useState(false);
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        setVal(e.target.value)
    };
    const location = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const check = (e) => {
        if (userName.current.value === 'aleko' && userPass.current.value === '123123') {
            signIn({
                userame: userName.current.value,
                userPassword: userPass.current.value
            });
            setShow(false);
        } else {
            alert('არ არის სწორი');
        }
    }
    const userName = useRef(null);
    const userPass = useRef(null);
    const navLink1 = useRef(null);
    const navLink2 = useRef(null);
    const navLink3 = useRef(null);
    const navLink4 = useRef(null);
    const navLink5 = useRef(null);
    const navLink6 = useRef(null);
    const navLink7 = useRef(null);
    const navLinks = useMemo(() => [
        navLink1, navLink2, navLink3, navLink4, navLink5, navLink6, navLink7
    ], []);
    useEffect(() => {
        let path = location.pathname.split('/');
        if (path[1] === 'about') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink1.current.classList.add('active')
        } else if (path[1] === 'services') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink2.current.classList.add('active')
        } else if (path[1] === 'blog') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink3.current.classList.add('active')
        } else if (path[1] === 'media') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink4.current.classList.add('active')
        } else if (path[1] === 'vacancy') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink5.current.classList.add('active')
        } else if (path[1] === 'guide') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink6.current.classList.add('active')
        } else if (path[1] === 'pubInfo') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'));
            navLink7.current.classList.add('active')
        } else if (path[1] === 'main' || 'user') {
            navLinks.map((navLink) => navLink.current.classList.remove('active'))
        }
    }, [navLinks, location])
    const handleChange = (e) => {
        navLinks.forEach((navlink) => {
            navlink.current.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    const drawerWidth = 300;
    const drawer = (
        <div className='nav-side'>
            <List>
                <ListItem onClick={handleDrawerToggle}><Link to={'/about'}>{t('about')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/services'}>{t('services')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/blog'}>{t('blog')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/media'}>{t('media')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/vacancy'}>{t('vacancy')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/guide'}>{t('guide')}</Link></ListItem>
                <ListItem onClick={handleDrawerToggle}><Link to={'/pubInfo'}>{t('pubInfo')}</Link></ListItem>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className='nav_wrapper' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    sm: { display: 'block' },
                    md: { display: 'block' },
                    display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <div className='navBar'>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'block', lg: 'none' } }}
                >
                    <i className="fa-solid fa-bars"></i>
                </IconButton>
                <Navbar.Brand className='brand' >
                    <Link to={'/main'}>
                        <img src={Brand} alt='logo' />
                    </Link>
                </Navbar.Brand>
                <span className='poor_sight'>
                    <i className='fa-solid fa-eye'></i>
                    <span>{t('versionForBlind')}</span>
                </span>
                <div className='search'>
                    <input type="text" placeholder='  შეიყვანეთ საძიებო სიტყვა' />
                    <span className="search-icon">&#128269;</span>
                </div>
                <section>
                    <div className="sign_up" style={{ display: "flex" }}>
                        {!isAuthenticated ?
                            <Button variant="primary" onClick={() => setShow(true)}>
                                შესვლა
                            </Button> :
                            <Button variant="primary" className='profile'>
                                <Link className='wrap' to={'/user'}><p>პროფილი</p></Link>
                            </Button>
                        }
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            className='sign_in_modal'
                        >
                            <Modal.Header closeButton className='text-center'>
                                <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
                                    შედით სისტემაში
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ChakraProvider>
                            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                                <Stack spacing="8">
                                    <Stack spacing="6">
                                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                            <Heading size={{ base: 'xs', md: 'sm' }}>შედით სისტემაში</Heading>
                                            <Text color="fg.muted">
                                                არ გაქვთ აქაუნთი? <Link onClick={() => setShow(false)} to={'/register'}>რეგისტრაცია</Link>
                                            </Text>
                                        </Stack>
                                    </Stack>
                                    <Box
                                        py={{ base: '0', sm: '8' }}
                                        px={{ base: '4', sm: '10' }}
                                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                                        boxShadow={{ base: 'none', sm: 'md' }}
                                        borderRadius={{ base: 'none', sm: 'xl' }}
                                    >
                                        <Stack spacing="6">
                                            <Stack spacing="5">
                                                <FormControl>
                                                    <FormLabel htmlFor="email">Email</FormLabel>
                                                    <Input id="email" type="email" />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel htmlFor="password">Password</FormLabel>
                                                    <InputGroup>
                                                        <InputRightElement>
                                                        </InputRightElement>
                                                        <Input
                                                            id="password"
                                                            name="password"
                                                            type={'password'}
                                                            autoComplete="current-password"
                                                            required
                                                            {...props}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                            </Stack>
                                            <HStack justify="space-between">
                                                <Checkbox defaultChecked>Remember me</Checkbox>
                                            </HStack>
                                            <Stack spacing="6">
                                                <Button>შესვლა</Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Container>
                        </ChakraProvider>
                    </Modal.Body>
                </Modal>
            </div>
            <select value={val} onChange={changeLanguage} className='lang_change'>
                <option value="ge">GE</option>
                <option value="en">EN</option>
            </select>
        </section>
            </div >
    <Nav justify variant="tabs" className='col-md-8'>
        <Nav.Item>
            <Link ref={navLink1} className='nav-link' onClick={handleChange} to={'/about'}>{t('about')}</Link>
        </Nav.Item>
        <Nav.Item >
            <Link ref={navLink2} onClick={handleChange} className='nav-link' to={'/services'}>{t('services')}</Link>
        </Nav.Item>
        <Nav.Item>
            <Link ref={navLink3} onClick={handleChange} className='nav-link' to={'/blog'}>{t('blog')}</Link>
        </Nav.Item>
        <Nav.Item>
            <Link ref={navLink4} onClick={handleChange} className='nav-link' to={'/media'} ac>{t('media')}</Link>
        </Nav.Item>
        <Nav.Item >
            <Link ref={navLink5} onClick={handleChange} className='nav-link' to={'/vacancy'}>{t('vacancy')}</Link>
        </Nav.Item>
        <Nav.Item>
            <Link ref={navLink6} onClick={handleChange} className='nav-link' to={'/guide'}>{t('guide')}</Link>
        </Nav.Item>
        <Nav.Item>
            <Link ref={navLink7} onClick={handleChange} className='nav-link' to={'/pubInfo'}>{t('pubInfo')}</Link>
        </Nav.Item>
    </Nav>
        </div >
    )
}
export default MenuOfNav;
