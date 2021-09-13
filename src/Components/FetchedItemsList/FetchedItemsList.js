import React, { useContext, useEffect } from "react";
import FetchedItemsContext from "../../context/FetchedItemsContext";
import FetchedItemCard from "../FetchedItemCard/FetchedItemCard";
import "./FetchedItemsList.css";

const FetchedItemsList = () => {
  const {
    fetchedItems,
    setFetchedItems,
    originalFetchedItems,
    SetOriginalFetchedItems,
    filter,
  } = useContext(FetchedItemsContext);
  const getfetchedItems = async () => {
    const response = await fetch(
      "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"
    );
    const data = await response.json();
    setFetchedItems(data.results);
    SetOriginalFetchedItems(data.results);
  };

  useEffect(() => {
    getfetchedItems();
  }, []);

  useEffect(() => {
    /* debugger; */
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
          {fetchedItems.map((fetchedItem) => (
            <FetchedItemCard
              fetchedItem={fetchedItem}
              key={fetchedItem.first_name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchedItemsList;
