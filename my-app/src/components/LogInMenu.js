import { Button, Paper, Popover, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export default function LogInMenu (props) {

    const { anchorEl, open, onClose, onLogin, onSignUp } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => onLogin(username, password)}
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