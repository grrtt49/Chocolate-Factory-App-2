import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ChipSelect from "../components/ChipSelect";
import CustomDatePicker from "../components/CustomDatePicker";

const testTimes = [
    {
        label: "1:00 pm",
        value: 13,
        disabled: false,
    },
    {
        label: "2:00 pm",
        value: 14,
        disabled: false,
    },
    {
        label: "3:00 pm",
        value: 15,
        disabled: false,
    },
    {
        label: "4:00 pm",
        value: 16,
        disabled: true,
    },
    {
        label: "5:00 pm",
        value: 17,
        disabled: false,
    },
    {
        label: "6:00 pm",
        value: 18,
        disabled: false,
    },
];

export default function ScheduleAppointment() {
    
    const [availableTimes, setAvailableTimes] = useState([]);

    const onNewDate = () => {
        setAvailableTimes(generateAvailableTimes());
    };

    const generateAvailableTimes = () => {
        let times = [];
        for(let i = 1;  i <= 9; i++) {
            times.push({
                label: i + ":00 pm",
                value: i,
                disabled: Math.floor(Math.random() * 10) == 0
            });
        }
        return times;
    };

    return (
        <Stack direction="column" alignItems="center" spacing={4} padding={3}>
            <Typography
                variant="h5"
            >
                Schedule an Appointment
            </Typography>
            <CustomDatePicker onNewDate={onNewDate}/>
            <ChipSelect options={availableTimes} />
        </Stack>
    );
}