import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScheduleAppointment from './screens/ScheduleAppointment';
import { useState } from 'react';
import Home from './screens/Home';
import Layout from "./screens/Layout";
import Reviews from "./screens/Reviews";
import About from "./screens/About";
import axios from 'axios';
import Appointments from "./screens/Appointments";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#917236",
    },
    text: {
      main: "#917236",
    }
  },
});

function App() {

  const [appointments, setAppointments] = useState([]);
  const [userID, setUserID] = useState(null);
  const [username, setUsername] = useState(null);

  const login = async (username, password) => {
    try {
      let user = await axios.post("/api/log-in", {
        username: username,
        password: password,
      });
      setAppointments(user.data.appointments);
      setUserID(user.data.id);
      setUsername(user.data.username);
      console.log("Signed in: ", user.data);
    }
    catch (err) {
        console.log("Log in error: ", err);
    }
  }

  const signUp = async (username, password) => {
    try {
      let user = await axios.post("/api/sign-up", {
        username: username,
        password: password,
      });
      setAppointments(user.data.appointments);
      setUserID(user.data.id);
      setUsername(user.data.username);
      console.log("Signed up: ", user.data);
    }
    catch (err) {
        console.log("Sign in error: ", err);
    }
  }

  const onCancelAppointment = async (index) => {
      try {
          let appointments = await axios.post("/api/cancel-appointment", {
              userID: userID, 
              index: index,
          });
          setAppointments(appointments.data);
          console.log("Cancelled: ", appointments.data);
      }
      catch (err) {
          console.log("Cancel appointment error: ", err);
      }
  }

  const logOut = () => {
    setUsername(null);
    setUserID(null);
    setAppointments([]);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout login={login} signUp={signUp} username={username} logOut={logOut} />}>
            <Route index element={<Home />} />
            <Route path="schedule" element={<ScheduleAppointment userID={userID} setAppointments={setAppointments} />} />
            <Route path="appointments" element={<Appointments username={username} appointments={appointments} onCancelAppointment={onCancelAppointment} />} />
            <Route path="reviews" element={<Reviews />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
