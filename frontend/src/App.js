import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const loadData = () => {
      fetch('http://localhost:8000/api/customers/')
      .then(response => response.json())
      .then(data => setCustomers(data))
    }
    loadData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {customers.map(customer => (
          <h1 key={customer.id}>{customer.first_name} {customer.last_name}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
