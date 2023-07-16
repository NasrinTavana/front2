import React from 'react'
import Bgheader from '../component/bgheader/Bgheader'
import LightBtn from '../component/customBtn/LightBtn'
import Formbox from '../component/Formbox/Formbox'
import Navbar from '../component/Navbar/Navbar'
import Stack from '@mui/material/Stack';

export default function Layout() {
  return (
    <div>
      <Bgheader />
      <Navbar />

<div className='flex flex-col items-center'>
  <div>

  
<Formbox />
<Stack className='ms-10'  spacing={2} direction="row" >
<LightBtn text="iphone"/>
<LightBtn text="iphone"/>
<LightBtn text="iphone"/>
<LightBtn text="iphone"/>
</Stack>
</div>
</div>
   </div>
  )
}
