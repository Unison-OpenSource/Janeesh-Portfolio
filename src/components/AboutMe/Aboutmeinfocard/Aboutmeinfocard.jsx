import React from 'react'
import './Aboutmeinfocard.css'
const Aboutmeinfocard = ({ iconUrl, texts}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src={iconUrl} width="40" height="40" alt={texts}/>
        </div>
    </div>
  )
}

export default Aboutmeinfocard
