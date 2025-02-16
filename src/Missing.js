import React from 'react';
import miss from './missing.jpg'

const Missing = () => {
  return (
    <div className='missing'>
      <img src={miss} alt='wrong'></img>  
      <p>sorry, somthing went wrong</p>
      <p>please go to the home page or try again later</p>
    </div>
  )
}

export default Missing
