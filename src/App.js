
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/about';
import { Home } from './pages/home';
import { theme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Grid container direction='row' sx={{
          width:'100vw',
          margin:0,
          padding:0,
        }}>
          <Home/>
          <About/>
        </Grid>
    </ThemeProvider>
  );
}

export default App;
