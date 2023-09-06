import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';

const ProfesiogramaSingle = () => {
  const { id } = useParams();
  return (
    <div>
      <Breadcrumbs />
      ProfesiogramaSingle {id}
    </div>
  )
}

export default ProfesiogramaSingle