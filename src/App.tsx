import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingTable from './routes/RoutingTable';

function App() {
  return (
    <BrowserRouter>
      <RoutingTable />
    </BrowserRouter>
  );
}

export default App;
