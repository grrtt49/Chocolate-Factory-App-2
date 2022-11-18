import { Button, Popover, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export default function LogInMenu (props) {

    const { anchorEl, open, onClose, onLogin, onSignUp } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                />
                <TextField 
                    label="Password"
                    color="secondary"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type="password"
                />
                <TextField 
                    label="Confirm Password"
                    color="secondary"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                    type="password"
                />
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => onSignUp(username, password)}
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