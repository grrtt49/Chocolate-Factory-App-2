import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#DEBE5A",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
