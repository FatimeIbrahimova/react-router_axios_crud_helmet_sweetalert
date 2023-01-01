import React, { useEffect, useState } from 'react'
import axios from "axios";
import MyCard from '../components/Main/MyCard';
import { Grid } from "@mui/material";
import Loading from './Loading';
import { Helmet } from 'react-helmet';


const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const getData = async () => {
        return await axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((resp) => setData(resp.data))

    }
    useEffect(() => {
        getData()
        setLoading(false);
    }, [])
    // console.log(data);
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name="home" content="This is Home Page" />
            </Helmet>
            {loading ? <Loading /> : <Grid container spacing={6} style={{ marginTop: "10px" }}>

                {data?.map((item, index) => {
                    return <MyCard key={index} data={item} />
                })}

            </Grid>}
        </>
    )
}

export default Home