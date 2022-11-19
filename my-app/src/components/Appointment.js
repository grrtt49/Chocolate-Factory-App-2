import { Box, Button, Card, Stack, Typography } from "@mui/material";

export default function Appointment (props) {

    const { index, numberOfPeople, date, time, onCancel } = props;

    const dateObj = new Date(date);

    return (
        <Card
            elevation={5}
        >
            <Stack 
                padding={3}
                spacing={2}
            >
                <Typography>
                    { numberOfPeople } people
                </Typography>
                <Typography>
                    { dateObj.toLocaleDateString() }
                </Typography>
                <Typography>
                    { time }:00 pm
                </Typography>
                <Button 
                    variant="contained"
                    color="error"
                    onClick={() => onCancel(index)}
                >
                    Cancel
                </Button>
            </Stack>
        </Card>
    );
} 