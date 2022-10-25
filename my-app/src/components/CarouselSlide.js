import { Paper, Button, Box } from '@mui/material';
import chocolatesImg from "../chocolates.jpg";

export default function CarouselSlide(props) {
    console.log(props.item.src);

    return (
        <Box
            style={{
                backgroundImage: `url(${props.item.src})`,
                height: "300px",
            }}
        >
            <Box 
                sx={{
                    paddingRight: 10,
                    paddingLeft: 10,
                }}
            >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Box>
        </Box>
    )
}