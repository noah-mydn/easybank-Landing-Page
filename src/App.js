
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/about';
import { Blogs } from './pages/blog';
import { Footer } from './pages/footer';
import { Home } from './pages/home';
import { theme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Grid direction='column' container sx={{
          width:'max-content',
          height:'auto',
          margin:'0 !important',
          padding:'0 !important',
        }}>
          <Home/>
          <About/>
          <Blogs/>
          <Footer/>
        </Grid>
    </ThemeProvider>
  );
}

export default App;
