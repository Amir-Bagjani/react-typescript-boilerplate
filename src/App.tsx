import React from "./assets/react.png";
import Loading from "./assets/hearts.svg";

const App = () => {
  return (
    <>
      <h1>Hello World!!</h1>
      <img src={React} alt="react" width="500" height="300" />
      <br />
      <img src={Loading} alt="heart" />
    </>
  );
};

export default App;
