import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const navigate =  useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    function handleSave() {
        if (!title || !price || !image) {
            alert('Заполните все поля!')
            }else{
                navigate("/")
            }
    }

    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px'
        }}>
            <TextField
                value={title}
                label="Title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}/>
            <TextField
                value={price}
                label="Price"
                variant="outlined"
                onChange={(e) => setPrice(e.target.value)}/>
            <TextField
                value={image}
                label="Image"
                variant="outlined"
                onChange={(e) => setImage(e.target.value)}/>
            <Button onClick={() => handleSave()}
                    style={{
                        m: 1
                    }}
                    variant="contained">
                Save
            </Button>
        </Box>
    );
};

export default AddProduct;
