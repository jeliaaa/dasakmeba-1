import { Error, ErrorOutlineSharp } from '@mui/icons-material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Err = () => {
    return (
        <Container style={{width: "100%", height:'70dvh', backgroundColor:'#fff', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1>დაფიქსირდა შეცდომა 404, სცადეთ სხვა გზა.</h1>
            <ErrorOutlineSharp />
            <Link to={'/main'}>მთავარი</Link>
        </Container>
    )
}

export default Err