import React, { useState } from 'react'
import List from './List';

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const onChange = (event) => {
        const num = parseInt(event.target.value);
        setNumber(num);

    };

    const getItems = () =>{
        return [number, number+1, number+2];
    };
  return (
    <div style={{"margin":"50px"}}>
        <input type="text" onChange={onChange} />
        <List getItems={getItems}/>
    </div>
  )
}

export default UseCallback