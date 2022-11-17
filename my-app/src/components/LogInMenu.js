import { Button, Paper, Popover, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function LogInMenu (props) {

    const { anchorEl, open, onClose, onSignUp } = props;

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
                {/* <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    Log In
                </Typography> */}
                <TextField 
                    label="Username"
                    color="secondary"
                />
                <TextField 
                    label="Password"
                    color="secondary"
                />
                <Button 
                    variant="contained"
                    color="secondary"
                >
                    Log in
                </Button>
                <Stack>
                    <Typography >
                        Don't have an account yet?
                    </Typography>
                    <Button 
                        color="secondary"
                        onClick={onSignUp}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Popover>
    );
}