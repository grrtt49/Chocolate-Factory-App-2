import {useState} from 'react';
import { Chip, Grid, Stack } from "@mui/material";

export default function ChipSelect(props) {
    const [value, setValue] = useState(null);

    const chipClicked = (val) => {
        setValue(val);
        props.onChange(val);
    }

    let optionsList = props.options.map((option) => {
        return (<Chip 
            key={option.value} 
            label={option.label} 
            variant={option.value === value ? "filled" : "outlined"} 
            disabled={option.disabled} 
            onClick={() => chipClicked(option.value)}
            color="secondary"
        />);
    });

    return(
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} overflow="auto" width="100%" paddingBottom={2}>
            {optionsList}
        </Stack>
    );
}