import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PreviousArrow({onClick}) {
  return (
    <div className='absolute left-0 top-[-100px]' onClick={onClick}>
        <div className='cursor-pointer  w-12 h-12 border flex justify-center items-center text-white border-white rounded-full'>
        <FontAwesomeIcon icon={faArrowLeft}/>
        </div>
    </div>
  )
}

export default PreviousArrow