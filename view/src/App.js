import logo from './logo.svg';
import './App.css';
import Admin from './Components/Admin';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const loadData = () => {
    const requestOptions = {
      method: 'GET',
    };
    const x = fetch('http://127.0.0.1:8000/api/getlinks')
      .then(response => response.json() )
      .then(data => setData({ data }));
  }
  useEffect(() => { loadData() }, {});
  return (
    <div className="App">
      <Admin data ={data} />
    </div>
  );
}

export default App;
