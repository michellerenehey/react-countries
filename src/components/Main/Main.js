import '../styles/Main.css';
import { useState, useEffect } from 'react';
import { getCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      console.log(data);
    };
    fetchData();

    const continentList = countries.map; //map through countries to get names of continents // create a new set out of the array "new Set" (note, must spread set into array)
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
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>

      {filterCountries().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
