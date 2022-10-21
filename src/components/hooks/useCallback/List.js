import React from "react";

const List = ({ getItems }) => {
    const items= getItems();
  const list = items.map((item, index) => {
    return <h5 key={index}>{item}</h5>;
  });
  return <div>{list}</div>;
};

export default List;
