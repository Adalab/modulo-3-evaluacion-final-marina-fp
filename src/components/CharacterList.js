import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <section className='noresult'>
        <h2 className="noresult__text" >Your search doesn't match any of the characters</h2>
      </section>
    );
  } else {
    const cElements = props.characters.map((character) => {
      return (
        <li className='card' key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section>
        <ul className='cards'>{cElements}</ul>
      </section>
    );
  }
};

//CharacterList.propTypes = { character: PropTypes.object };
export default CharacterList;
