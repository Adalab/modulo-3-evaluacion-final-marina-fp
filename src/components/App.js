// React
import React, { useEffect, useState } from "react";
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

//Styles
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    }
  };
  const handleReset = () => {
    setName("");
    setSpecies("all");
  };

  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      return species === "all" ? true : character.species === species;
    })
    .sort((a, z) => a.name.localeCompare(z.name));;

  const renderLanding = (props) => {
    return (
      <div className='home__body'>
        <Header />
        <Filters handleFilter={handleFilter} handleReset={handleReset} name={name} species={species}/>
        <CharacterList characters={filterCharacters} />
        <Footer />
      </div>
    );
  };
  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);

    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  };

  return (
    <body className='App'>
      <Switch>
        <Route exact path='/' render={renderLanding} />
        <Route path='/character/:id' render={renderDetail} />
      </Switch>
    </body>
  );
};

export default App;
