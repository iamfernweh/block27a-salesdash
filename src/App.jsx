import './App.css';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import Revenue from './components/Revenue';
import Transactions from './components/Transactions';
import { Card } from '@mui/material';

function App() {
  return (
    <div className='grid grid-cols-2 gap-12'>
      <div>
        <Card>
          <Sidebar />
        </Card>
      </div>
      <div>
        <Card>
          <Revenue />
        </Card>
      </div>
      <div>
        <Card>
          <Transactions />
        </Card>
      </div>
      <div>
        <Card>
          <Heading />
        </Card>
      </div>
    </div>


  );
}

export default App;