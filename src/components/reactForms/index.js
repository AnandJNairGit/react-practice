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
        <h1 className="title">React Forms</h1>
        <form>
          <div>
            <label className="block">Name</label>
            <input
              className="block neumorphic"
              name="name"
              type="text"
              onChange={onFormChange}
            />
          </div>
          <div>
            <label className="block">Subject</label>
            <input
              className="block neumorphic"
              name="subject"
              type="text"
              onChange={onFormChange}
            />
          </div>

          <div>
            <label className="block">Title</label>
            <input
              className="block neumorphic"
              name="title"
              type="text"
              onChange={onFormChange}
            />
          </div>
          <div>
            <label className="block">Body</label>
            <textarea
              className="block neumorphic"
              name="body"
              onChange={onFormChange}
            ></textarea>
          </div>

          <select
            className="neumorphic-drop"
            name="type"
            onChange={onFormChange}
          >
            <option value="type1">type1</option>
            <option value="type2">type2</option>
          </select>
        </form>
      </div>
    </>
  );
}
