import '../styles/CountryCard.css';

export default function CountryCard({ name, continent }) {
  return (
    <div>
      <div>{name}</div>
      <div>{continent}</div>
    </div>
  );
}
