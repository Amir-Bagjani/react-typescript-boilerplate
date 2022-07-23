import React from "./assets/react.png";
import Loading from "./assets/hearts.svg";

const App = () => {
  return (
    <>
      <p>mode is {process.env.NODE_ENV}</p>
      <img src={Loading} alt="heart" />
      <h1>Hello World!!</h1>
      <img src={React} alt="react" width="500" height="300" />
    </>
  );
};

export default App;
