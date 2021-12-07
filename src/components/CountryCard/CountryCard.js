import '../styles/CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="card">
      <div className="countryName">{name}</div>
      {/* <div>{continent}</div> */}
      <img src={`https://flagcdn.com/84x63/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
