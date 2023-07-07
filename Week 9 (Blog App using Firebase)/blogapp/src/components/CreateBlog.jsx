import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import styles from './CreateBlog.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/config';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const blogCollectionReference = collection(db, "blogs");

    const navigate = useNavigate();

    const handleCreateBlog = async () => {
        const blogObject = {
            title, 
            description,
            image
        }

        try {
            await addDoc(blogCollectionReference, blogObject);
            alert("Blog Succesfully created");
        } catch(error) {
            console.log(error);
        }
    }

    const handleViewBlogsRoute = () => {
        navigate('/view-blogs');
    }


    return (
        <Box display="flex" flexDirection="column" gap="20px">
            <TextField value={title} onChange={(event) => setTitle(event.target.value)} id="title" placeholder="Enter title" label="Title" variant="outlined" />
            <TextField value={image} onChange={(event) => setImage(event.target.value)} className={styles.description} placeholder="Enter Image Url" id="description" label="Image Url" variant="outlined" />
            <TextField value={description} onChange={(event) => setDescription(event.target.value)} className={styles.description} multiline placeholder="Enter Description" id="description" label="Description" variant="outlined" />
            <Button variant="contained" onClick={handleCreateBlog}>Create</Button>
            <Button variant="contained" onClick={handleViewBlogsRoute}>View Blogs</Button>

        </Box>
    )
}
