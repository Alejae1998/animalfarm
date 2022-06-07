import './Animal.css';

export default function AnimalsFarm({ name, type, says }) {
  return (
    <div className='animal-farm'>
      <p>{name}</p>
      <p>{type}</p>
      <p>{says}</p>
      <img src={`/animals/${type}.png`}/>
    </div>
  );
}