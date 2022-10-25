import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScheduleAppointment from './screens/ScheduleAppointment';
import { useState } from 'react';
import Home from './screens/Home';

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
  const [screen, setScreen] = useState("home");

  let page = null;
  console.log("Screen: ", screen)
  switch (screen) {
    case "schedule":
      page = <ScheduleAppointment setScreen={setScreen} />;
      break;
  
    default:
      page = <Home setScreen={setScreen} />;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      {page}
    </ThemeProvider>
  );
}

export default App;
