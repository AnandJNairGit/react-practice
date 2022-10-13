import React, { useState } from "react";
import "./style.css";

export default function ReactForms() {
  const [formData, setFormData] = useState({});

  const onFormChange = (e) => {
    let data = formData;
    data[e.target.name] = e.target.value;
    setFormData(data);
    console.log(data);
  };

  return (
    <>
      <div className="formContainer">
        <form>
          <label>Name</label>
          <input name="name" type="text" onChange={onFormChange} />

          <label>Subject</label>
          <input name="subject" type="text" onChange={onFormChange} />

          <label>Title</label>
          <input name="title" type="text" onChange={onFormChange} />
          <label>Body</label>
          <textarea name="body" onChange={onFormChange}></textarea>

          <select name="type" onChange={onFormChange}>
            <option value="type1">type1</option>
            <option value="type2">type2</option>
          </select>
        </form>
      </div>
    </>
  );
}
