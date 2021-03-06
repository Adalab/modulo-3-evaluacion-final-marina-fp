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
        <li className='card__item' key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <section>
        <ul className='card__list'>{cElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
