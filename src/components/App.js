// Router
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

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
  useEffect(()=>{
    getDataFromApi().then(data => setCharacters(data));
  }, []);
  
  return (
    <div className='App'>

      <Header />
      <Switch>
        <Route>
          <Filters />
          <CharacterList characters={characters} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
