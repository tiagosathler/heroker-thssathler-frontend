import './App.css';

import React, { useEffect, useState } from 'react';

const API_URI = process.env.REACT_APP_API_URI;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URI}/users`)
      .then((res) => res.json())
      .then((parsedData) => { setData(parsedData); setLoading(false); });
  }, []);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <table>
        <tr>
          {Object.keys(data[0]).map(
            (key) => (<th key={ Math.random() }>{key}</th>),
          )}
        </tr>
        <tbody>
          {data.map((rowInfo) => (
            <tr key={ Math.random() }>
              {
                Object.values(rowInfo).map(
                  (cellInfo) => (<td key={ Math.random() }>{cellInfo}</td>),
                )
              }
            </tr>
          ))}
        </tbody>
      </table>
      <p>Teste</p>
    </div>
  );
}

export default App;
