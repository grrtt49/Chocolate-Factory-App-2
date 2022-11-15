import { Button, Stack, Typography } from "@mui/material";
import HomeCarousel from "../components/HomeCarousel";
import Grid from "@mui/material/Grid";

export default function Home(props) {

    const goToUrl = (url) => {
        if(url != null) {
          window.location.href = "/" + url;
        }
    };

    return (
        <Stack>
            <HomeCarousel />
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    fontFamily: 'Dancing Script, sans-serif',
                }}
            >
                Welcome to Adell's!
            </Typography>
            <Grid container spacing={3} sx={{padding: "20px", marginTop: "20px"}}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            Come join us to start your chocolate-making journey!
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            In our interactive studio, we will teach you everything you need to know to become a master chocolate maker! We provide a fun and creative environment for groups of all ages. Schedule an appointment with us today!
                        </Typography>
                    </div>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        sx={{marginTop: "20px"}}
                        onClick={() => goToUrl('schedule')}
                    >
                        Make an Appointment
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            People have many wonderful things to say about us!
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            Read our reviews to see what experiences people have when coming here! Alos, you can leave your own review about your own adventures at Adell's.
                        </Typography>
                    </div>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        sx={{marginTop: "20px"}}
                        onClick={() => goToUrl('reviews')}
                    >
                        Reviews
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    );
}