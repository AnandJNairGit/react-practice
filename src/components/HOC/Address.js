import React from "react";
import { FetchedList } from "./FetchedList";

const Address = () => {

  //   const [data, setData] = useState({  });
  //   const [isLoading, setIsLoading ] = useState(true);   

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://random-data-api.com/api/v2/addresses?size=20");
  //     const json = await res.json();
  //     console.log("the json data is ---------->", json);
  //     const data = json.map((item)=>{return (item.street_address);});
  //     setData(data);
  //     console.log("the data is----------->", data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // },[]);

  // const addresses = !isLoading ? data.map((item,index)=>{return (<h5 key={index}>{item}</h5>);}) : "";

  return (
  <FetchedList fetchTerm="addresses" fetchSize={20} dataExtractKey="street_address"/>
  );
};

export default Address;
