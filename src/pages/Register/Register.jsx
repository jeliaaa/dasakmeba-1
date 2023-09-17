import React, { useState } from 'react'
import './register.scss'
import { Container } from 'react-bootstrap'
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel, NativeSelect } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const changeAgree = () => {
        setAgree(prev => !prev)
    }
    return (
        <Container className='register_wrapper' style={{ backgroundColor: 'white' }}>
            <Breadcrumbs />
            <form style={{ width: '100%' }}>
                <FormControl required>
                    <InputLabel>პირადი ნომერი</InputLabel>
                    <Input type='number'/>
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
                    <Input type='email'/>
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
                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label={<Link style={{ textDecoration: "underline" }} to={'privacy'}>ვეთანხმები პირობებს</Link>}
                        checked={agree}
                        onClick={changeAgree}
                    />
                    <button type='submit' className='register' disabled={!agree}>
                        {agree ? <Link to={'verify'}>რეგისტრაცია</Link> : 'რეგისტრაცია'}
                    </button>
                </div>
            </form>


        </Container>
    )
}

export default Register