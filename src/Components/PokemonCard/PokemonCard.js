import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const [pokemonInfo, setPokemonInfo] = useState();
  const getPokemon = async () => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    setPokemonInfo(data);
  };
  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <div className="col-12 col-sm-4">
        <div className="pokemon-card mt-4">
          <div className="pokemon-image-container">
            <Link to={`/pokemon/${pokemon.name}`}>
              {pokemonInfo.sprites && (
                <img
                  className="fetchedItem-image d-flex justify-content-center"
                  src={
                    pokemonInfo.sprites.other["official-artwork"].front_default
                  }
                  alt={`${pokemon.name} 's portrait`}
                />
              )}
            </Link>
            <div className="pokemon-name-container">
              <p className="pokemon-name  py-4">{`${pokemon.name.toUpperCase()}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
