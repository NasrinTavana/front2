
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function LightBtn(props) {
  return (
    <Box sx={{ '& button': { m: 1 } ,'& button:hover':{backgroundColor:"#fff" , color:'#2961ff94' ,borderColor:'#fff' } }}>

      <Button
       variant="outlined"
       size='small'
       sx={{borderColor:'#fff' , backgroundColor:'#ffffff4a' , color:'#fff'}}
       >
        {props.text}
       </Button>

     </Box>
  );
}