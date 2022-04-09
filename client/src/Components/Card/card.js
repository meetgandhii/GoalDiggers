import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import medicine from "../../Images/medPlaceholder.png";


export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={medicine}
        alt="medicine"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Medicine Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medicine Details:
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quasi quaerat esse suscipit, cupiditate consequatur inventore neque perferendis dolore, doloribus fuga! Consequatur, ea voluptates maxime eaque quibusdam culpa aliquid quam.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
