import * as React from 'react';
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import ChipSelect from "../components/ChipSelect";
import CustomDatePicker from "../components/CustomDatePicker";
import Confetti from 'react-dom-confetti';

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

export default function ScheduleAppointment(props) {
    
    const [availableTimes, setAvailableTimes] = useState([]);
    const [dateSelected, setDateSelected] = useState(false);
    const [peopleCount, setPeopleCount] = useState(0);
    const [email, setEmail] = useState("");
    const [timeSelected, setTimeSelected] = useState(false);
    const [isConfetti, setIsConfetti] = useState(false);

    const onNewDate = () => {
        setAvailableTimes(generateAvailableTimes());
        setDateSelected(true);
    };

    const onNewTime = () => {
        setTimeSelected(true);
    };

    const scheduleAppointment = () => {
        setIsConfetti(true);
    }

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
            <Typography
                variant="p"
            >
                Having an appointment guarentees you a spot at Adell's Chocolate Factory at the specified time. While an appointment is not manditory, it helps us plan when people are coming and saves you any wait times.
            </Typography>
            <TextField 
                label="Email" 
                color="secondary" 
                sx={{width: 300}}
                onChange={event => {setEmail(event.target.value);}}
                value={email || ""}
            />
            <TextField 
                label="Number of people" 
                color="secondary" 
                type="number" 
                sx={{width: 200}} 
                InputProps={{inputProps: {min: 1, max: 10}}} 
                onChange={event => {setPeopleCount(event.target.value);}}
            />
            <CustomDatePicker onNewDate={onNewDate}/>
            <ChipSelect options={availableTimes} onChange={onNewTime} />
            <Button 
                variant="contained" 
                color="secondary" 
                disabled={!dateSelected || peopleCount <= 0 || email == "" || !timeSelected}
                sx={{position: "fixed", bottom: 15}}
                onClick={scheduleAppointment}
            >
                Schedule
            </Button>
            <Stack justifyContent="center" alignItems="center">
				<Confetti 
					active={isConfetti} 
					config={{
						elementCount: 100,
						spread: 80,
						startVelocity: 50,
						angle: 135,
					}}
				/>
				<Confetti 
					active={isConfetti} 
					config={{
						elementCount: 100,
						spread: 80,
						startVelocity: 50,
						angle: 45,
					}}
				/>
			</Stack>
        </Stack>
    );
}