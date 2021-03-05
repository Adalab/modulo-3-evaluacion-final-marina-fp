import { Link } from 'react-router-dom';

const CharacterCard = props => {
  return (    
      <Link to={`/user/${props.character.id}`}>
        <img className="card__img" src={props.character.image} alt={`Foto de ${props.character.image}`} title={`Foto de ${props.character.image}`} />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__species">
          {props.character.species}
        </p>
      </Link>
  );
};

export default CharacterCard;