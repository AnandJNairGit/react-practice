import React from "react";
import { useEffect, useState } from "react";

export const FetchedList = (props) => {
  const { fetchTerm, fetchSize, dataExtractKey } = props;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const baseUrl = "https://random-data-api.com/api/v2/";
      const size = `?size=${fetchSize}`;
      const res = await fetch(`${baseUrl + fetchTerm + size}}`);
      const json = await res.json();
      console.log("the json data is ---------->", json);
      const data = json.map((item) => {
        return item[dataExtractKey];
      });
      setData(data);
      console.log("the data is----------->", data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const displayList = !isLoading
    ? data.map((item, index) => {
        return <h5 key={index}>{item}</h5>;
      })
    : "";

  return (
    <div style={{ margin: "100px" }}>
      <h1>Address</h1>
      {displayList}
    </div>
  );
};
