import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [count, setCount] = useState(0);

  const pastClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const nextClick = () => {
    if (count < pokemonList.length-1) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <PokemonCard pokemon={pokemonList[count]} />
      <button onClick={pastClick}>Précédent</button>
      <button onClick={nextClick}>Suivant</button>
      <p>
        {count+1}/{pokemonList.length}
      </p>
    </div>
  );
}

export default App;
