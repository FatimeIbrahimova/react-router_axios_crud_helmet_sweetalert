import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';


const Add = () => {
    const [data, setData] = useState({ name: "", username: "" });
    const navigate = useNavigate();
    function handleChange(e) {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }


    function handleClick(e) {

        e.preventDefault();
        let URL = 'https://jsonplaceholder.typicode.com/users/';
        axios.post(URL, data);
        Swal.fire({
            title: 'Success!',
            text: 'User added',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        navigate('/');
    }
    return (
     <>
        <Helmet>
                <title>Add page</title>
                <meta name="add" content="This is Add Page" />
            </Helmet>
        <form method="post" style={{display:"flex",justifyContent:"center",height:"100vh", alignItems:"center"}}>
            <TextField onChange={(e)=>handleChange(e)} name="name" id="outlined-basic" label="Name" variant="outlined" />
            <TextField onChange={(e)=>handleChange(e)} name="username" id="outlined-basic" label="Username" variant="outlined" />
            <Button onClick={(e)=>handleClick(e)}  variant="contained" color="warning">Add to Api</Button>
        </form>
     </>
    )
}

export default Add