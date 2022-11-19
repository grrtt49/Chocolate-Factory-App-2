import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker(props) {
    const [value, setValue] = React.useState(null);
    
    const shouldDisableDate = (date) => {
      //return date.getDay() === 0 || date.getDay() === 6;
      return date.$W === 0 || date.$W === 6;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            onAccept={(newValue) => {
              props.onNewDate(newValue);
            }}
            shouldDisableDate={shouldDisableDate}
            renderInput={(params) => <TextField color="secondary" {...params} />}
            disablePast
          />
        </LocalizationProvider>
    );
}