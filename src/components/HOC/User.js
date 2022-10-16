import React from "react";
import { FetchedList } from "./FetchedList";

const User = () => {
  return (
    <FetchedList
      title="Users"
      fetchTerm="users"
      fetchSize={20}
      dataExtractKey="first_name"
    />
  );
};

export default User;
