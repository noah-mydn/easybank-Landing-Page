
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/home';
import { theme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
