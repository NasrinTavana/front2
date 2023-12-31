import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomBtn(props) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
          <div>
         <Button variant="contained" size="medium">
          {props.text}
        </Button>
      </div>
    </Box>
  );
}