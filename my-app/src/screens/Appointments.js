import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Appointment from "../components/Appointment";
import axios from 'axios';

export default function Appointments (props) {

    const { username, appointments, onCancelAppointment } = props;

    const navigate = useNavigate();

    const signInView = (
        <Stack
            spacing={3}
            padding={3}
            alignItems="center"
        >
            <Typography
                variant="h4"
            >
                Hello!
            </Typography>
            <Typography
                variant="p"
            >
                To see your appointments, please sign in by clicking the account icon above.
            </Typography>
        </Stack>
    );

    const appointmentsList = appointments.length > 0 ? appointments.map((appointment, index) => {
        console.log("Appointment: ", appointment);
        return <Appointment key={index} index={index} onCancel={onCancelAppointment} numberOfPeople={appointment.numberOfPeople} date={appointment.date} time={appointment.time} />;
    }) 
    : (
        <Stack
            alignItems="center"
            spacing={2}
        >
            <Typography>You haven't made any appointments yet!</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/schedule")}
            >
                Schedule an appointment
            </Button>
        </Stack>
    );

    const appointmentsView = (
        <Stack
            spacing={3}
            padding={3}
        >
            <Typography 
                variant="h4"
                textAlign="center"
            >
                Hello {username}!
            </Typography>

            <Typography
                variant="p"
                textAlign="center"
            >   
                View all your appointments here.
            </Typography>

            <Stack
                alignItems="center"
                spacing={2}
            >
                {appointmentsList}
            </Stack>
        </Stack>
    );

    const view = username ? appointmentsView : signInView;

    return (
        <>
            {view}
        </>
    );
}