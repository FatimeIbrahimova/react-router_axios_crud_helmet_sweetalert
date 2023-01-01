
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const DataDetails = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((resp) => setData(resp.data));
    }, [id])
    function handleClick() {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${data.id}`)
            .then((resp) => console.log("deleted"));
        navigate('/');
    }
    return (
        <>
            <h1>Name-{data.name}</h1>
            <p>username={data.username}</p>
            <p>id-{data.id}</p>
            <Button onClick={() => handleClick()} variant='contained' color='error'>Delete</Button>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default DataDetails