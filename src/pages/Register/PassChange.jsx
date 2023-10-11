import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../ReusableComponents/breadcrumbs/Breadcrumbs'

const PassChange = () => {
  return (
    <Container style={{backgroundColor:'#fff', padding:30}}>
        <Breadcrumbs />
        <h1>თქვენ გამოგეგზავნათ სმს</h1>
        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
            <h5>ნომერი : 555555**</h5>
            <h5>შეიყვანეთ კოდი:</h5>
            <input type="text" />
            <Link to={'/main'}></Link>
        </div>
    </Container>
    )
}

export default PassChange