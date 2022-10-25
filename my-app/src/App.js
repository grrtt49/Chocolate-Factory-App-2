import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScheduleAppointment from './screens/ScheduleAppointment';

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
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <ScheduleAppointment />
    </ThemeProvider>
  );
}

export default App;
