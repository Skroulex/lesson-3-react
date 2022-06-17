import React from 'react';
import Pokemons from "./components/Pokemons/Pokemons";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import Header from "./components/Header/Header";
import "./App.css"

const App = () => {
    return (
        <div>
            <Header />
            <Pokemons2 />
            {/*<Pokemons />*/}
          <RickAndMorty />
          <Users />
        </div>
    );
};

export default App;
