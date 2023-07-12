import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/config';
import BlogCard from '../components/BlogCard';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ViewBlogsPage() {
 const blogCollectionReference = collection(db, "blogs");
 const [blogs, setBlogs] = useState([]);
 const [blogModified, setBlogModified] = useState();
 const navigate = useNavigate();

 const getAllBlogs = async () => {
    const blogs = await getDocs(blogCollectionReference);
    const blogsReadableData = blogs.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
    })
    setBlogs(blogsReadableData);
    console.log(blogsReadableData, 'blogs');
 }

 useEffect(() => {
    getAllBlogs();
 }, [blogModified])

 // Try to explore snapshots at firebase

  return (
    <Box>
      <IconButton onClick={() => navigate('/')}>
        <ArrowBackIcon />
        <Typography>Back</Typography>
      </IconButton>
        {
          blogs.length === 0 ?
           <Box width="100vw" height="100vh" display='flex' flexDirection='column' justifyContent='center' alignItems='center'><Typography variant='h5'>There is no blogs yet.</Typography>
            <Button variant='contained' color='secondary' onClick={() => navigate('/')}>Go to Home</Button>
          </Box> : 
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" justifyContent="center" gap="20px">
          {
            blogs.map((blogObject, index) => <BlogCard blogModified={(dataModified) => setBlogModified(dataModified)} key={index} data={blogObject} />)
          }
          </Box>
        }
    </Box>
  )
}
