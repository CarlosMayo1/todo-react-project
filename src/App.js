import React from "react";
import "./App.css";

import ToDo from "./Components/ToDo";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faTimesCircle, faEdit);

const App = () => {
  return <ToDo />;
};

export default App;
