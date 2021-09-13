import React, { useContext, useEffect } from "react";
import FetchedItemsContext from "../../context/FetchedItemsContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

const PokemonList = () => {
  const {
    fetchedItems,
    setFetchedItems,
    originalFetchedItems,
    SetOriginalFetchedItems,
    filter,
  } = useContext(FetchedItemsContext);
  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    setFetchedItems(data.results);
    SetOriginalFetchedItems(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (filter !== undefined) {
      console.log(filter);
      const fetchedItemsFiltered = originalFetchedItems.filter(
        (fetchedItem) => {
          return (
            fetchedItem.first_name.toLowerCase() ||
            fetchedItem.last_name.toLowerCase()
          ).includes(filter.toLowerCase());
        }
      );
      if (fetchedItemsFiltered !== []) {
        setFetchedItems(fetchedItemsFiltered);
      }
      console.log(fetchedItemsFiltered);
    }
  }, [filter, originalFetchedItems, setFetchedItems]);
  return (
    <>
      <div className="fetchedItem-list mt-3 ">
        <div className="row">
          {fetchedItems.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
