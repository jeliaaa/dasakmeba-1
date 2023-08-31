import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import { useParams } from 'react-router-dom'

const ProfesiogramaSingle = () => {
  const {id} = useParams();
  return (
    <Container style={{backgroundColor: '#fff'}}>
      <Breadcrumbs />
      <div>{id}</div>
    </Container>
  )
}

export default ProfesiogramaSingle