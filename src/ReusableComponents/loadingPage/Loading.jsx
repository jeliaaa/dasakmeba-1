import { CircularProgress } from '@mui/material'
import React from 'react'
import './loading.scss'

const Loading = () => {
  return (
    <div className='loading_bg'>
        <h1>იტვირთება... <span><CircularProgress color='inherit' /></span></h1>
    </div>
  )
}

export default Loading