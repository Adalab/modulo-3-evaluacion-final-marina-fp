import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        <header>
          <h2 className='detail__title'>Personaje no encontrado</h2>
          <Link to='/'>
            <span className=''>Icono</span>
          </Link>
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
          <h2 className='detail__title'>{props.selectedCharacter.name}</h2>
          <Link to='/'>
            <span className=''>Icono</span>
          </Link>
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
            {/* <li>Episodios: {props.selectedCharacter.episode}</li> */}
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
