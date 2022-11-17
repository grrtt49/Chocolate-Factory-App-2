import { Button, Popover, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function LogInMenu (props) {

    const { anchorEl, open, onClose, onLogin } = props;

    return (
        <Popover
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Stack 
                spacing={3}
                sx={{
                    margin: "15px",
                }}
            >
                <TextField 
                    label="Username"
                    color="secondary"
                />
                <TextField 
                    label="Password"
                    color="secondary"
                />
                <TextField 
                    label="Confirm Password"
                    color="secondary"
                />
                <Button 
                    variant="contained"
                    color="secondary"
                >
                    Sign Up
                </Button>
                <Stack>
                    <Typography >
                        Already have an account?
                    </Typography>
                    <Button 
                        color="secondary"
                        onClick={onLogin}
                    >
                        Log In
                    </Button>
                </Stack>
            </Stack>
        </Popover>
    );
}