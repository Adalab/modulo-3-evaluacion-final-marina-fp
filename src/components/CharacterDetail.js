import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../stylesheets/CharacterDetail.scss";
import notfound from "../images/notfound.jpg";

const CharacterDetail = (props) => {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        <div className='notfound'>
          <Link to='/'>
            <span className='arrow'>
              <i className='fas fa-undo-alt' />
            </span>
          </Link>
          <div className='notfound__container'>
            <h2 className='notfound__title'>Character not found</h2>
            <p className='notfound__quote'>
              “I’m sorry, but your opinion means very little to me.”- Rick
            </p>
            <img className='notfound__image' src={notfound} alt='' />
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <div className='detail'>
        <Link to='/'>
          <span className='arrow'>
            <i className='fas fa-undo-alt' />
          </span>
        </Link>
        <section className='detail__container'>
          <h2 className='detail__header'>{props.selectedCharacter.name}</h2>
          <img
            className='detail__image'
            src={props.selectedCharacter.image}
            alt={`Foto de ${props.selectedCharacter.name}`}
          />
          <ul className='detail__description'>
            <li className='detail__description--element'>
              Species: {props.selectedCharacter.species}
            </li>
            <li className='detail__description--element'>
              Origin planet: {props.selectedCharacter.origin}
            </li>
            <li className='detail__description--element'>
              Localización: {props.selectedCharacter.location}
            </li>
            <li className='detail__description--element'>
              Estado: {props.selectedCharacter.status}
            </li>
            <li className='detail__description--element'>
              Episodios: {props.selectedCharacter.episodes}
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
};
export default CharacterDetail;
