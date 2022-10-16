import React, { useEffect, useState } from "react";

const User = () => {

  //   const [data, setData] = useState({  });
  //   const [isLoading, setIsLoading ] = useState(true);   

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://random-data-api.com/api/v2/users?size=20");
  //     const json = await res.json();
  //     const data = json.map((item)=>{return (item.first_name);});
  //     setData(data);
  //     console.log("the data is----------->", data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // },[]);

  // const users = !isLoading ? data.map((item,index)=>{return (<h5 key={index}>{item}</h5>);}) : "";

  return (
    <FetchedList
      fetchTerm="users"
      fetchSize={20}
      dataExtractKey="first_name"
    />
  );
};

export default User;
