import React from "react";

function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
       <input type="text" onChange={() => {console.log("Hi!")}} />;
    </>
  )
}

export default App;
