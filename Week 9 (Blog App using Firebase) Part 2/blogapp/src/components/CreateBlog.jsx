import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import styles from './CreateBlog.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../config/config';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import useLocalStorage from '../hooks/useLocalStorage';
import Notification from './Notification';

export default function CreateBlog() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [user, setUser] = useLocalStorage('user', null);
    const [imageProgress, setImageProgress] = useState("");
    const [notificationObject, setNotificationObject] = useState({
        message: "",
        open: false
    })
    const blogCollectionReference = collection(db, "blogs");

    const navigate = useNavigate();

    const handleCreateBlog = async () => {
        const blogObject = {
            title,
            description,
            // image,
            category,
            author: user.displayName ? user.displayName : user.email,
            userId: user.uid,
            createdAt: Date.now(),
            image
        }

        try {
            await addDoc(blogCollectionReference, blogObject);
            setNotificationObject({ ...notificationObject, open: true, message: 'Blog Succesfully created' })
        } catch (error) {
            console.log(error);
        }
    }

    const handleViewBlogsRoute = () => {
        navigate('/view-blogs');
    }

    const uploadImageFunc = (event) => {
        console.log(event.target.files[0]);
        setImageFile(event.target.files[0]);
         // Where the image is going to be stored on firebase/storage
    const storageRef = ref(storage, `/images/${Date.now()}/blogs`);

    // What does this mean ? It tells you how much image is uploaded by %
    const uploadImage = uploadBytesResumable(storageRef, event.target.files[0] );

    // Here snapshot will provide you information how much image is uploaded
    uploadImage.on("state_changed", (snapshot) => {
        const progressOfImageUpload = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageProgress(progressOfImageUpload);
    }, (error) => {
        console.log('There was an error uploading an image', error);
        // Add A notification here as well
    }, () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            console.log('image uploaded at url', url);
            setImage(url);
        })
    })
    }


    return (
        <Box display='flex' justifyContent='center' alignItems="center">
            <Box display="flex" flexDirection="column" gap="20px" padding="20px" border="1px solid #e6e4e4">
                <TextField value={title} onChange={(event) => setTitle(event.target.value)} id="title" placeholder="Enter title" label="Title" variant="outlined" />
                {/* <TextField value={image} onChange={(event) => setImage(event.target.value)} className={styles.description} placeholder="Enter Image Url" id="description" label="Image Url" variant="outlined" /> */}
                <TextField value={description} onChange={(event) => setDescription(event.target.value)} className={styles.description} multiline placeholder="Enter Description" id="description" label="Description" variant="outlined" />

                <Box display='flex' gap='4px'>
                    <Category addCategory={(value) => setCategory(value)} />
                </Box>

                <input type='file' onChange={uploadImageFunc} />
                <p>Image uploading... {imageProgress}%</p>

                <Button variant="contained" onClick={handleCreateBlog}>Create</Button>
                <Button variant="contained" onClick={handleViewBlogsRoute}>View Blogs</Button>
            </Box>

            <Notification open={notificationObject.open} message={notificationObject.message} />
        </Box>
    )
}
