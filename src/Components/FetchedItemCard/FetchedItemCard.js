import React from "react";
import { Link } from "react-router-dom";
import "./FetchedItemCard.css";

const FetchedItemCard = ({ fetchedItem }) => {
  return (
    <>
      <div className="col-12 col-sm-4">
        <Link to={`/${fetchedItem.id}`}>
          <img
            className="fetchedItem-image "
            src={fetchedItem.image}
            alt={`${fetchedItem.first_name} ${fetchedItem.last_name}'s portrait`}
          />{" "}
        </Link>
        <p className="mt-2">{`${fetchedItem.first_name} ${fetchedItem.last_name}`}</p>
      </div>
    </>
  );
};

export default FetchedItemCard;
