import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function BlogCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 400 }}
      image={data.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {data.description}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  )
}
