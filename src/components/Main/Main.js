import '../styles/Main.css';
import { useState, useEffect } from 'react';
import { getCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      console.log(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((item) => item.name.toLowerCase().includes(query));
  }

  return (
    <>
      <input
        name="searchBar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country"
      />
      {filterCountries().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
