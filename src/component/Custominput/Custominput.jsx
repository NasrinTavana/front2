import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Custominput(props) {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
<div>
        <TextField
       
          id="standard-search"
          label={props.label}
          placeholder={props.placeholder}
          type="search"
          variant="standard"
        />
</div>
    
    </Box>
  )}
