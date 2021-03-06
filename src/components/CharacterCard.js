import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <div className="card">
    <Link to={'/character/' + props.character.id}>
        <img
        className='card__image'
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className='card__title'>{props.character.name}</h4>
      <p className='card__species'>{props.character.species}</p>
    </Link>
    </div>
  );
};
CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string
}
export default CharacterCard;