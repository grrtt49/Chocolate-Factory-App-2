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

const logIn = async (username, password) => {
    try {
      await axios.post("/api/log-in", {
        username: username,
        password: password,
      });
    }
    catch (err) {
        console.log("Log in error: ", err);
    }
}

const signUp = async (username, password) => {
  try {
    await axios.post("/api/sign-in", {
      username: username,
      password: password,
    });
  }
  catch (err) {
      console.log("Sign in error: ", err);
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout login={logIn} signUp={signUp} />}>
            <Route index element={<Home />} />
            <Route path="schedule" element={<ScheduleAppointment />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="about" element={<About />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
