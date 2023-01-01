import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';

const MyCard = ({ data }) => {
    return (
        <>
        <Grid item md={6}>
            <Card sx={{border:"2px solid red"}}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {data.name}
                    </Typography>
                    <Typography variant="body2">
                        {data.username}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`${data.id}`}><Button size="small">Detail of {data.name}</Button></Link>
                </CardActions>
            </Card>
            </Grid>
        </>
    )
}

export default MyCard