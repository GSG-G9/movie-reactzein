import React, { useState } from "react";

const RoboPic = () => {
  const [search, setSearch] = useState("");
  const [set, setSet] = useState(0);
  const [src, setSrc] = useState("");

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <input
        type="number"
        value={set}
        on
        onChange={(e) => {
          setSet(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setSrc(`https://robohash.org/:${search}?set=set${set}`);
        }}
      >
        generate
      </button>
      <div>
        <img
          src={src}
          alt="Robot"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default RoboPic;
