import { Stack, Typography } from "@mui/material";
import Appointment from "../components/Appointment";

export default function Appointments (props) {

    const { username, appointments } = props;

    const signInView = (
        <Stack
            spacing={3}
            padding={3}
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

    const appointmentsList = appointments.map((appointment, index) => {
        console.log("Appointment: ", appointment);
        return <Appointment key={index} numberOfPeople={appointment.numberOfPeople} date={appointment.date} time={appointment.time} />;
    });

    const appointmentsView = (
        <Stack
            spacing={3}
            padding={3}
        >
            <Typography 
                variant="h4"
            >
                Hello {username}!
            </Typography>

            {appointmentsList}
        </Stack>
    );

    const view = username ? appointmentsView : signInView;

    return (
        <>
            {view}
        </>
    );
}