import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import Proptypes from 'prop-types';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/config';
import useLocalStorage from '../hooks/useLocalStorage';

// eslint-disable react/prop-types
export default function BlogCard({ data, blogModified }) {

  const [user, setUser] = useLocalStorage('user', null);
  console.log(user.uid, data.author);
  // console.log(data);
  const deleteBlog = () => {
    const blogDoc = doc(db, "blogs", data.id);
    
    deleteDoc(blogDoc).then((response) => {
      console.log("Blog succesfully deleted")
      blogModified(data.id);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: '100px' }}
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
      <Typography variant="body2" color="text.secondary">
        Created By:  <cite>{data.author}</cite>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created On: {new Date(data.createdAt).toLocaleDateString()}
      </Typography>
    </CardContent>
    <CardActions>
     {
      user.uid === data.userId ?  <Button onClick={deleteBlog} variant='contained' color='error' size="small">Delete</Button> : null
     }
    </CardActions>
  </Card>
  )
}

BlogCard.Proptypes = {
  data: Proptypes.any
}