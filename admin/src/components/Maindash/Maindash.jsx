import React from 'react'
import Cards from '../Cards/Cards'
import './Maindash.css'

const Maindash = () => {
  return (
    <div className="MainDash">
      <div className='title'>
        Monthly Overview
      </div>
       <Cards />
    </div>
   
  )
}

export default Maindash