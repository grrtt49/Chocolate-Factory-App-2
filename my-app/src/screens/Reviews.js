import { Stack, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ReviewCard from "../components/ReviewCard";
import Confetti from 'react-dom-confetti';
import { useState } from "react";
import Rating from '@mui/material/Rating';

const reviews = [
    {
        title: "These are the BEST chocolates out there!",
        author: "Diana Stewart",
        review: "I've been to many chocolate stores out there, but none are quite like Adell's!",
        stars: 5,
    },

    {
        title: "We had the best time there",
        author: "Josh Alderman",
        review: "The costomer service at Adell's is amazing! They always make sure you leave happy and satisfied!",
        stars: 5,
    },

    {
        title: "The people at Adell's are always so helpful",
        author: "Beatrice Clark",
        review: "Every time I go to Adell's they are always so helpful, they can even teach you some chocolate making tricks if you want to make your own!",
        stars: 5,
    },
];

export default function Reviews() {
    const [isConfetti, setIsConfetti] = useState(false);
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    const writeReview = () => {
        setIsConfetti(true);
    }

    let reviewCards = reviews.map((review, index) => {
        return (<Grid item xs={12} md={4}><ReviewCard key={index} title={review.title} author={review.author} review={review.review} stars={review.stars}></ReviewCard></Grid>)
    });

    console.log(reviewCards);

    return (
        <div>
            <Grid container spacing={3} sx={{padding: "10px", marginTop: "20px"}}>
                {reviewCards}
            </Grid>
            <Stack alignItems="center" direction="column" spacing={3} marginTop={3}>
                <Typography
                    variant="h5"
                >
                    Leave a review
                </Typography>

                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />

                <TextField 
                    label="Name" 
                    color="secondary" 
                    sx={{width: 300}}
                    onChange={event => {setName(event.target.value);}}
                    value={name || ""}
                />

                <TextField 
                    label="Review" 
                    color="secondary" 
                    sx={{width: 300}}
                    multiline
                    rows={3}
                    onChange={event => {setReview(event.target.value);}}
                    value={review || ""}
                />

                <Button 
                    variant="contained" 
                    color="secondary" 
                    disabled={name == "" || review == "" || rating == 0}
                    sx={{position: "fixed", bottom: 15}}
                    onClick={writeReview}
                >
                    Schedule
                </Button>
            </Stack>

            <Stack justifyContent="center" alignItems="center">
            <Confetti 
                active={isConfetti} 
                config={{
                    elementCount: 100,
                    spread: 80,
                    startVelocity: 50,
                    angle: 135,
                }}
            />
            <Confetti 
                active={isConfetti} 
                config={{
                    elementCount: 100,
                    spread: 80,
                    startVelocity: 50,
                    angle: 45,
                }}
            />
            </Stack>
        </div>
    );
}