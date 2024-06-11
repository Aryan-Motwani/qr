import React, { useState } from "react";
import sanityAPI from "./sanitySetup";

const pushData = async (title, points) => {
  const newData = {
    _type: "page",
    title: title,
    points: points + 0,
  };
  await sanityAPI.create(newData);
};

const getData = async () => {
  const data = await sanityAPI.fetch(`*[_type == "page"]`);
  console.log(data);
};

function Nex() {
  const [title, setTitle] = useState();
  const [points, setPoints] = useState();
  const handleSubmit = () => {
    pushData(title, points);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NEX</h1>
      <button onClick={getData}>Get Data</button>
      <p></p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        name="title"
      ></input>
      <p></p>
      <input
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        type="number"
      ></input>
      <p></p>
      <button onClick={handleSubmit}>Put Data</button>
    </div>
  );
}

export default Nex;
