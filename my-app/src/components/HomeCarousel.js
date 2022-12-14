import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CarouselSlide from './CarouselSlide';
import chocolatesImg from "../chocolates.jpg";
import otherChocolatesImg from "../otherChocolates.jpg";

export default function HomeCarousel(props) {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src: chocolatesImg,
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: otherChocolatesImg,
        }
    ];

    return (
        <Carousel
            navButtonsAlwaysVisible
            animation="fade"
            indicatorContainerProps={{
                style: {
                    marginTop: "20px",
                }
            }}
        >
            {items.map(
                (item, i) => {
                    return (<CarouselSlide key={i} item={item} />);
                }
            )}
        </Carousel>
    );
}