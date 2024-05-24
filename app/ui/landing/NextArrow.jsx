import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NextArrow({onClick}) {
  return (
    <div className='absolute left-16 top-[-100px]' onClick={onClick}>
        <div className='cursor-pointer  w-12 h-12  flex justify-center items-center border text-white border-white rounded-full'>
        <FontAwesomeIcon icon={faArrowRight}/>
        </div>
    </div>
  )
}

export default NextArrow