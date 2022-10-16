import React from "react";
import { FetchedList } from "./FetchedList";

const User = () => {
  return (
    <FetchedList fetchTerm="users" fetchSize={20} dataExtractKey="first_name" />
  );
};

export default User;
