import { Card, Typography } from "@mui/material";

export default function Appointment (props) {

    const { numberOfPeople, date, time } = props;

    return (
        <div>
            <Typography>
                Hello
                { numberOfPeople }
                { date }
                { time }
            </Typography>
        </div>
    );
} 