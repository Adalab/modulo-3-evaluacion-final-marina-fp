import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
    if(props.character === undefined) {
        <>
        <header>
            <h2 className='card__title'>Personaje no encontrado</h2>
            <Link to='/'>
            <span className=''></span>
            </Link>
        </header>
        </>
    }
    else {
        return (
  <>
    <header>
      <h2 className='card__title'>{props.character.name}</h2>
        <Link to='/'>
          <span className=''></span>
        </Link>
    </header>
    <section>
      <img className='card__img' src={props.character.image} alt={`Foto de ${props.character.name}`} />
      <ul className='card__description'>
        <li>Especie:{props.character.species}</li>
        <li>Planeta de origen: {props.character.origin.name}</li>
        <li>Localización: {props.character.location.name}</li>
        <li>Estado: {props.character.status}</li>
        {/* <li>Episodios: {props.character.episode}</li> */}
      </ul>
    </section>
  </>
  )}
};
export default CharacterDetail;
