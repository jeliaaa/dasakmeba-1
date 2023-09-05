import React from 'react'
import { useParams } from 'react-router-dom'

const ProfesiogramaSingle = () => {
    const {id} = useParams();
  return (
    <div>ProfesiogramaSingle {id}</div>
  )
}

export default ProfesiogramaSingle