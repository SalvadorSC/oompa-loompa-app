import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const FetchedItemsContext = createContext();

export const FetchedItemProvider = ({ children }) => {
  const [fetchedItems, setFetchedItems] = useState([]);
  const [filter, setFilter] = useState();
  const [originalFetchedItems, SetOriginalFetchedItems] = useState([]);
  return (
    <FetchedItemsContext.Provider
      value={{
        fetchedItems,
        setFetchedItems,
        originalFetchedItems,
        SetOriginalFetchedItems,
        filter,
        setFilter,
      }}
    >
      {children}
    </FetchedItemsContext.Provider>
  );
};

FetchedItemProvider.propTypes = {
  children: PropTypes.any,
};

export default FetchedItemsContext;
