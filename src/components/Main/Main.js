import '../styles/Main.css';
import { useState, useEffect } from 'react';
import { getCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [selector, setSelector] = useState('All');
  const [loading, setLoading] = useState(true); //initially loading div is true

  useEffect(() => {
    //setCountries state
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false); // once data is there, loading div is false
      console.log(data);
    };
    fetchData();
  }, []);

  function getContinents() {
    //create list of continents
    const continentList = countries.map((country) => country.continent);
    const uniqueContinentList = [...new Set(continentList), 'All'];
    console.log(uniqueContinentList);

    //remove null value
    const continentListArray = uniqueContinentList.filter((item) => item);
    return continentListArray;

    // return [... new Set(countries.map(({ continent }) => continent).filter(Boolean))]
  }

  function filterCountriesAndContinents() {
    return countries.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) &&
        (item.continent === selector || selector === 'All')
      );
    });
  }

  if (loading) return <div>...page is loading...</div>;
  return (
    <>
      <input
        name="searchBar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country"
      />
      <select value={selector} onChange={(e) => setSelector(e.target.value)}>
        {getContinents().map((item, index) => (
          <option key={index} value={item}>{`${item}`}</option>
        ))}
      </select>

      {filterCountriesAndContinents().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </>
  );
}
