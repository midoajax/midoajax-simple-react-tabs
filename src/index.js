import React from "react";
import ReactDOM from "react-dom";
import Tabs from "../src/Tabs/Tabs";

import "./styles.css";

function App() {
  return <Tabs />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
