import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Heading from './components/Heading';
import Charts from './components/Charts';
import TransactionBar from './components/TransactionBar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Heading />
      <Charts />
      <TransactionBar />
    </>
  );
}

export default App;
