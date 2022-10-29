import { Button, Stack, Typography } from "@mui/material";
import HomeCarousel from "../components/HomeCarousel";
import Grid from "@mui/material/Grid";

export default function Home(props) {

    const goToUrl = (url) => {
        if(url != null) {
          window.location.href = url;
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
            <Grid sx={{ padding: "20px"}} container>
                <Grid item sx={12} md={6}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        In addition to selling delicious chocolates, we also provide the opportunity to create your own chocolates!
                    </Typography>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        sx={{marginTop: "20px"}}
                        onClick={() => goToUrl('/schedule')}
                    >
                        Make an Appointment
                    </Button>
                </Grid>
                <Grid item sx={12} md={6}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        People have many wonderful things to say about us! Head to our reviews section, and if you are a return customer, feel free to leave a review!
                    </Typography>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        sx={{marginTop: "20px"}}
                        onClick={() => goToUrl('/reviews')}
                    >
                        Reviews
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    );
}