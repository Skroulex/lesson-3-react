import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import Pokemons from "./components/Pokemons/Pokemons";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
    return (
        // указываем что роутинг будет в браузере
       <BrowserRouter>
           {/*header будет на всех наших страницах*/}
           <Header />
           {/*для перечисления роутов*/}
           <Routes>
               {/*непосредственно сами роуты*/}
               <Route path="/" element={<h1>Homepage</h1>} />
               <Route path="/pokemons" element={<Pokemons/>} />
               <Route path="/pokemons-2" element={<Pokemons2/>} />
               <Route path="/rick-and-morty" element={<RickAndMorty/>} />
               <Route path="/add" element={<AddProduct/>} />
           </Routes>
           {/*footer будет на всех страницах*/}
           <h1>Footer</h1>
       </BrowserRouter>
    );
};

export default App;
