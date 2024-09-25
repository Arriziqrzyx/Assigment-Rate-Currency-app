import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import './App.css'

const App = () => {
  const [rates, setRates] = useState({});
  const currencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Fetch data dari API dengan key dari .env
        const response = await axios.get(`${import.meta.env.VITE_API_URL}?apikey=${import.meta.env.VITE_API_KEY}`);
        setRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchRates();
  }, []);

  // Fungsi untuk menghitung we buy dan we sell
  const calculateWeBuy = (rate) => (rate * 0.98).toFixed(2);
  const calculateWeSell = (rate) => (rate * 1.02).toFixed(2);

  return (
    <Container className="mt-5 py-4">
      <h1 className="text-center text-white fw-bold">Currency Exchange Rates</h1>
      <h3 className="text-center text-white fw-bold mt-2 mb-5">Base USD</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
            <th>We Buy</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(currency => (
            <tr key={currency}>
              <td className="text-center align-middle">{currency}</td>
              <td className="text-center align-middle">{rates[currency] ? Number(rates[currency]).toFixed(2) : "Loading..."}</td>
              <td className="text-center align-middle">{rates[currency] ? calculateWeBuy(rates[currency]) : "Loading..."}</td>
              <td className="text-center align-middle">{rates[currency] ? calculateWeSell(rates[currency]) : "Loading..."}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
