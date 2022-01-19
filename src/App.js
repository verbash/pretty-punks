import CoverFlow from './components/CoverFlow'// Styles must use direct files imports
import GridRoom from './components/GridRoom'
import Links from './components/Links'
import Album from './components/Album'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <>
    {/* <Typography variant="h3" component="div" gutterBottom>
        Pretty Punks
      </Typography>
      <Button variant="contained">Hello World</Button> */}
      <Album />
      {/* <Links />
      <CoverFlow /> */}
    {/* <GridRoom /> */}
    </>
  );
}

export default App;
