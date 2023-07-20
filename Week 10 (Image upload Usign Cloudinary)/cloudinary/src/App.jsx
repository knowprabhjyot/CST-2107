import { useState } from 'react'
import './App.css'


// https://cloudinary.com/documentation/react_integration

function App() {

  // How we can upload an image on cloudinary

  const inputStyle = {
    height: 40
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const uploadImage = async (event) => {


    // First Step (Create a Form Data)
    const formData = new FormData();

    // Second Step
    formData.append("upload_preset", "your_preset");

    // Third Step
    formData.append("file", event.target.files[0]);

    // Fourth Step (call the API for cloudinary)
    const response = await fetch('https://api.cloudinary.com/v1_1/${cloud_name}/upload', {
      method: "POST",
      body: formData
    })

    const responseWithJson = await response.json();

    setSelectedImage(responseWithJson.url);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      password,
      selectedImage
    })

    // Now you can just call addDoc here and upload the object
  }


  return (
    <>
    <h1>Register Form</h1>
     <form style={{ display: 'flex', flexDirection: 'column', gap: 20}}>
        <input value={name} onChange={(event) => setName(event.target.value)} style={inputStyle} type="text" placeholder='Enter name' />
        <input value={password} onChange={(event) => setPassword(event.target.value)} style={inputStyle} type="password" placeholder='Enter Password' />
        <input onChange={(event) => uploadImage(event)} style={inputStyle} type="file" />
        <button onClick={handleSubmit}>Register</button>
     </form>
    </>
  )
}

export default App
