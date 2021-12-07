import '../styles/Main.css';
import { useState, useEffect } from 'react';
import { getCountries } from '../../services/countries';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return <main></main>;
}
