import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import  { AiOutlineEyeInvisible,AiOutlineEye } from '../helpers/icons';


function HideShowPassword(props) {
    const [open, setOpen] = useState(false);

  return (
    <div className='' onClick={() => setOpen(!open)} >
        {open? 
    <AiOutlineEye  className='text-2xl' />
        :
        <AiOutlineEyeInvisible className='text-2xl' /> }
    </div>
  )
}

HideShowPassword.propTypes = {}

export default HideShowPassword
