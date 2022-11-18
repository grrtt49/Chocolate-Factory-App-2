import { Button, Popover, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AccountMenu (props) {
    const { anchorEl, open, onClose, username, appointments, onLogOut } = props;

    const navigate = useNavigate();

    const handleViewAppointments = () => {
        navigate('appointments');
    };

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
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    Welcome {username}!
                </Typography>

                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={handleViewAppointments}
                >
                    View Appointments
                </Button>

                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => onLogOut()}
                >
                    Log out
                </Button>
            </Stack>
        </Popover>
    );
}