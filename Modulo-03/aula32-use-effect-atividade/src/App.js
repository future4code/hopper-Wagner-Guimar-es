import React from "react";
import "./App.css";
import axios from "axios";
import PokeCard from "./Components/PokeCard/PokeCard";
import { useEffect, useState } from "react";

const AtividadeUseEffect = () => {
  const [pokeLista, setPokeLista] = useState([]);
  const [pokeNome, setPokeNome] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeLista(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ChangeNamePokemon = (event) => {
    setPokeNome(event.target.value);
  };

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <select onChange={ChangeNamePokemon}>
        <option value={""}>Nenhum</option>
        {pokeLista.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
          //
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeNome && <PokeCard pokemon={pokeNome} />}
    </div>
  );
};

export default AtividadeUseEffect;
