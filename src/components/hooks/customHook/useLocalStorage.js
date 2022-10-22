import React, { useEffect, useState } from "react";

const getData = (key, value) => {
  const data = localStorage.getItem(key);
  if (data) return data;
  return value;
};

const useLocalStorage = (key, value) => {
  const [data, setData] = useState(getData(key, value));
  useEffect(() => {
    localStorage.setItem(key, data);
  }, [data]);

  return [data, setData];
};

export default useLocalStorage;
