import React, { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://random-data-api.com/api/v2/users");
      const json = await res.json();
      console.log(json);
    };
    getData();
  });

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default User;
