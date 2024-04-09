import React from 'react'
import './Aboutmeinfocard.css'
const Aboutmeinfocard = ({ iconUrl, text}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src={iconUrl} width="40" height="40" alt={text}/>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Aboutmeinfocard
