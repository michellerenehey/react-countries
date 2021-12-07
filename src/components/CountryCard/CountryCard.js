import '../styles/CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div>
      <div>{name}</div>
      {/* <div>{continent}</div> */}
      <img src={`https://flagcdn.com/84x63/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
