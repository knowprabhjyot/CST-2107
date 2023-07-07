import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/config';
import BlogCard from '../components/BlogCard';
import { Box } from '@mui/material';

export default function ViewBlogsPage() {
 const blogCollectionReference = collection(db, "blogs");
 const [blogs, setBlogs] = useState([]);

 const getAllBlogs = async () => {
    const blogs = await getDocs(blogCollectionReference);
    const blogsReadableData = blogs.docs.map((doc) => {
        return doc.data();
    })
    setBlogs(blogsReadableData);
    console.log(blogsReadableData, 'blogs');
 }

 useEffect(() => {
    getAllBlogs();
 }, [])

  return (
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="20px">
        {
            blogs.map((blogObject, index) => <BlogCard key={index} data={blogObject} />)
        }
    </Box>
  )
}
