import { Paper, Button, Box, Stack } from '@mui/material';
import chocolatesImg from "../chocolates.jpg";

export default function CarouselSlide(props) {
    console.log(props.item.src);

    return (
        <Box
            style={{
                backgroundImage: `url(${props.item.src})`,
                height: "400px",
                backgroundSize: "100% auto"
            }}
        >
            {/* <Stack 
                sx={{
                    paddingRight: 10,
                    paddingLeft: 10,
                }}
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <div>
                    <h2 style={{color: "white"}} >{props.item.name}</h2>
                    <p style={{color:"white"}}>{props.item.description}</p>

                    <Button className="CheckButton">
                        Check it out!
                    </Button>
                </div>
            </Stack> */}
        </Box>
    )
}