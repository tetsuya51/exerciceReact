import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
const onePokemonFromTheList = pokemonList[0];

function App() {
  return (
    <div>
      <PokemonCard pokemon={onePokemonFromTheList} />
    </div>
  );
}

export default App;
