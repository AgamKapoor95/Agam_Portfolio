import React from 'react'
import Agam_Kapoor_Resume from '../assests/Agam_Kapoor_Resume.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={Agam_Kapoor_Resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
