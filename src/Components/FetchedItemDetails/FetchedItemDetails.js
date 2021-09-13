import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FetchedItemDetails.css";

const FetchedItemDetails = () => {
  const [fetchedItem, setOompaLoompa] = useState({});
  const { id } = useParams();
  const {
    image,
    first_name,
    last_name,
    profession,
    height,
    quota,
  } = fetchedItem;
  const getfetchedItems = async () => {
    const response = await fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
    );
    const data = await response.json();
    setOompaLoompa(data);
  };

  useEffect(() => {
    getfetchedItems();
  }, []);
  return (
    <>
      <h1 className="w-75 m-auto mt-5">{`${first_name} ${last_name}`}</h1>
      <div className="w-75 d-flex justify-content-between m-auto">
        <div className="row">
          <img
            className="fetchedItem-image col-12 col-sm-6 mt-5"
            src={image}
            alt={`${first_name} ${last_name}'s portrait`}
          />
          <div className="col-12 col-sm-6 mt-5">
            <p>Details: </p>
            <p>{`Profession: ${profession}`}</p>
            <p>{`Height: ${height}`}</p>
          </div>
          <div className="col-12 mt-5">
            <p>{`Quote: ${quota}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchedItemDetails;
