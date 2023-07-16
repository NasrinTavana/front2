import React from 'react'
import Custominput from '../Custominput/Custominput'
import Location from '../Location/Location'
import Dropdown from '../Dropdown/Dropdown'
import CustomBtn from '../customBtn/CustomBtn'

export default function Formbox() {
  return (

   <div className='p-10'>

      <div className='flex bg-white'>
        <Custominput label='What are you looking for?' placeholder='What are you looking for?' />
        <Location placeholder='lacation'/>
        <Dropdown />
        <CustomBtn text='Search'/>
      </div>

      
    </div>

  )
}
