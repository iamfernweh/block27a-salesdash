import { Grid } from '@mui/material';
import './App.css';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import Revenue from './components/Revenue';
import Transactions from './components/Transactions';

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Heading />
        </Grid>

        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <h2>Transactions</h2>
          <Revenue />
          <Transactions />
        </Grid>
      </Grid>
    </>
  );
}

export default App;