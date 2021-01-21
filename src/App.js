import React from "react";
import RoboPic from "./RoboPic";
import Context from "./Context";


const App = () => {
  return (
    <Context.Provider value=''>
      <div className="App">
        <RoboPic />
      </div>
    </Context.Provider>
  );
};

export default App;
