import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'All Categories',
    label: 'All Categories',
  },
  {
    value: 'Real Estate',
    label: 'Real Estate',
  },
  {
    value: 'Books & Magazines',
    label: 'Books & Magazines',
  },
  {
    value: 'Furniture',
    label: 'Furniture',
  },
  {
    value: 'Electronics',
    label: 'Electronics',
  },
  {
    value: 'Cars & Vehicles',
    label: 'Cars & Vehicles',
  },
  {
    value: ' Others',
    label: 'Others',
  },
  
];

export default function Dropdown() {
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
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="All Categories"
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}