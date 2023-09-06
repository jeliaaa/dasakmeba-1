import React from 'react'
import { useParams } from 'react-router-dom'

const CalendarSingle = () => {
    const {month, id} = useParams()
   return (
    <div>CalendarSingle {month}{id}</div>
  )
}

export default CalendarSingle