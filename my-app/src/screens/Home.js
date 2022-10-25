import { Stack } from "@mui/material";
import HomeCarousel from "../components/HomeCarousel";

export default function Home(props) {

    return (
        <Stack>
            {/* <img src={chocolatesImg} style={{width: "100%"}} />
            <div>Home!</div> */}
            <HomeCarousel />
        </Stack>
    );
}