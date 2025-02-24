/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='ml-10 mr-10 text-4xl font-semibold bg-slate-600 text-center p-5 text-white '>User : {userid}</div>
  )
}

export default User
