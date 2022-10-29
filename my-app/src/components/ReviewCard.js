import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ReviewCard (props) {

    return (
        <Card elevation={4}>
            <CardContent>
                <Rating name="read-only" value={props.stars} readOnly  />
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.author}
                </Typography>
                <Typography variant="body2">
                    {props.review}
                </Typography>
            </CardContent>
        </Card>
    );
}