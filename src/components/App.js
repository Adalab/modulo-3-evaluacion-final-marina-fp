// Router
import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";

// Components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
//import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

// Services
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

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
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      return species === "all" ? true : character.species === species;
    });

  return (
    <div className='App'>
      <Header />
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filterCharacters} />
      <Footer />
    </div>
  );
};

export default App;
