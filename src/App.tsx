import React from "./assets/images/react.png";
import Loading from "./assets/images/hearts.svg";
import RefreshFeature from "./components/RefreshFeature"

const App = () => {  
  return (
    <>
      <p>mode is {process.env.NODE_ENV}!</p>
      <img src={Loading} alt="heart" />
      <h1>Hello World!!</h1>
      <img src={React} alt="react" width="500" height="300" />
      <br />
      <br />
      <br />
      <RefreshFeature />
    </>
  );
};

export default App;
