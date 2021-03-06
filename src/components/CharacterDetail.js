import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        <header>
          <Link to='/'>
            <span className=''>Volver</span>
          </Link>
          <h2 className='detail__title'>Personaje no encontrado</h2>
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
            <span className=''>Volver</span>
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
            <li>Especie:{props.selectedCharacter.species}</li>
            <li>Planeta de origen: {props.selectedCharacter.origin.name}</li>
            <li>Localización: {props.selectedCharacter.location.name}</li>
            <li>Estado: {props.selectedCharacter.status}</li>
            <li>Episodios: {props.selectedCharacter.episodes}</li>
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
