import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        <header>
          <Link to='/'>
            <span className=''>Back</span>
          </Link>
          <h2 className='detail__title'>Character not found</h2>
        </header>
        <section>
          <img className='' src='' alt='' />
        </section>
      </>
    );
  } else {
    return (
      <div>
        <header>
          <Link to='/'>
            <span className=''>Back</span>
          </Link>
          <h2 className='detail__title'>{props.selectedCharacter.name}</h2>
        </header>
        <section>
          <img
            className='detail__img'
            src={props.selectedCharacter.image}
            alt={`Foto de ${props.selectedCharacter.name}`}
          />
          <ul className='detail__description'>
            <li>Species:{props.selectedCharacter.species}</li>
            <li>Origin planet: {props.selectedCharacter.origin}</li>
            <li>Localización: {props.selectedCharacter.location}</li>
            <li>Estado: {props.selectedCharacter.status}</li>
            <li>Episodios: {props.selectedCharacter.episodes}</li>
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
