// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
//import PropTypes from 'prop-types';

// Components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

// Services
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('all');

  useEffect(()=>{
    getDataFromApi().then(data => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) =>{
    if(inputChange.key ==='name'){
      setName(inputChange.value);
    }
    else if(inputChange.key ==='species'){
      setSpecies(inputChange.value);
    }       
  }
const handleReset = () => {
  setName('');
  setSpecies('all');
};

const filterCharacters = characters.filter(character => {return character.name.toUpperCase().includes(name.toUpperCase())
  }).filter(character =>{
    return species ==='all'? true: character.species === species
});

const renderLanding = props =>{
  return (
    <>
    <Header />
      <Filters handleFilter = {handleFilter} />
      <CharacterList characters = {filterCharacters} />
      <Footer />
    </>
  )
}
const renderDetail = props =>{
  const id = parseInt(props.match.params.id);

  const selectedCharacter = characters.find( character =>{
    return character.id === id;
  });
  return <CharacterDetail selectedCharacter ={selectedCharacter} />
}

  return (
    <div className='App'>
      <Switch>
          <Route exact path='/' render={renderLanding} />
          <Route path='/character/:id' render={renderDetail} />
      </Switch>
    </div>
  );
}

export default App
