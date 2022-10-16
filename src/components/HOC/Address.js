import React from "react";
import { FetchedList } from "./FetchedList";

const Address = () => {
  return (
    <FetchedList
      title ="Addresses"
      fetchTerm="addresses"
      fetchSize={20}
      dataExtractKey="street_address"
    />
  );
};

export default Address;
