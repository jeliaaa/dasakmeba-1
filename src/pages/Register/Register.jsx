import React, { useState } from 'react'
import './register.scss'
import { Container } from 'react-bootstrap'
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel } from '@mui/material'
import { Link } from 'react-router-dom'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const changeAgree = () => {
        setAgree(prev => !prev)
    }
    return (
        <Container className='register_wrapper' style={{ backgroundColor: 'white' }}>
            <form style={{ width: '100%' }}>
                <FormControl className='email' required>
                    <InputLabel>Email address</InputLabel>
                    <Input aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl className='fullname' required>
                    <InputLabel>Full name</InputLabel>
                    <Input type='text' aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className='pass' required>
                    <InputLabel>Enter Your Password:</InputLabel>
                    <Input type='password' aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className='repeat' required>
                    <InputLabel >Repeat Your Password</InputLabel>
                    <Input type='password' aria-describedby="my-helper-text" />
                </FormControl>

                <div className='register_submit_wrapper'>
                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label={<Link style={{ textDecoration: "underline" }} to={'/privacy'}>I agree to the terms of policy</Link>}
                        checked={agree}
                        onClick={changeAgree}
                    />
                    <button type='submit' className='register' disabled={!agree}>Register</button>
                </div>
            </form>


        </Container>
    )
}

export default Register