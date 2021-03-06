import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = props =>{

  const cElements = props.characters.map(character =>{
    return  <li className="card" key= {character.id}> <CharacterCard character ={character}/></li>
  })
  return (
    <section>
      <ul className="cards">
        {cElements}
      </ul>
    </section>
  )
};

CharacterList.propTypes = { character: PropTypes.object };
export default CharacterList;