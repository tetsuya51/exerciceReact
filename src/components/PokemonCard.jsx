import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure className={pokemon.type}>
      {pokemon.imgSrc == null ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card"/>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
