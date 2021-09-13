import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import FetchedItemsContext from "../../context/FetchedItemsContext";

const Header = () => {
  const { setFilter } = useContext(FetchedItemsContext);
  let location = useLocation();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center title-search-bar">
        <h1 className="title-fetchedItems-list">
          Find your {location.pathname === "/" ? "Oompa Loompa" : "Pokémon"}
        </h1>
        <div className="d-flex align-items-center">
          <input
            className="input-search"
            onChange={(e) => setFilter(e.target.value)}
            type="text"
          />
          <div className="search-icon-box d-flex align-items-center">
            <img
              className="search-icon"
              src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
