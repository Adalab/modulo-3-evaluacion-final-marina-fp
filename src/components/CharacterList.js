import CharacterCard from './CharacterCard';

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
}
export default CharacterList;