import React from "react";
import Card from "./component/Card";
import catDetails from "./constants/catsDetails";

const App = () => {
  return <Card details={catDetails} />;
};

export default App;
