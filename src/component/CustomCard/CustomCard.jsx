import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function CustomCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.images}
        title="green iguana"
      />

      <CardContent>
       <div className='flex justify-between'>
        <span className='rounded-full'>Real Estate</span>
        <FavoriteIcon  />
       </div>
        <Typography gutterBottom variant="h5" component="div">
        Own New House
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Don St, Brooklyn, New York
        </Typography>
      </CardContent>
    
    </Card>
  );
}
