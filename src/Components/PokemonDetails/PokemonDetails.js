import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const { sprites, id, height } = pokemon;
  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      {pokemon && (
        <div>
          <h1 className="w-75 m-auto mt-5">{`${name[0].toUpperCase()}${name.slice(
            1
          )}`}</h1>
          <div className="w-75  m-auto">
            <div className="row">
              <img
                className="fetchedItem-image col-12 col-sm-4 mt-5"
                src={sprites.other["official-artwork"].front_default}
                alt={`${name} 's portrait`}
              />

              <div className="col-12 col-sm-6 mt-5">
                <p>{`Nº: ${id}`}</p>
                <p>{`Height: ${height}`}</p>
              </div>
              <div className="col-12 mt-5">
                {/* <p>{`Quote: ${ quota }`}</p> */}
              </div>
            </div>
            <h3 className="col-6">Sprites:</h3>

            <div className="row">
              <div className="col-2">
                <img src={sprites.front_default} alt="" />
                <p>Front default</p>
              </div>
              <div className="col-2">
                <img src={sprites.front_shiny} alt="" />
                <p>Front shiny</p>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <img
                  src={sprites.versions["generation-ii"].crystal.front_default}
                  alt=""
                />
                <p>Front default</p>
              </div>
              <div className="col-2">
                <img
                  src={sprites.versions["generation-ii"].crystal.front_shiny}
                  alt=""
                />
                <p>Front shiny</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
