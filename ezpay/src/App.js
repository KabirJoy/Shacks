import React from "react";
import "./App.css";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

import Tabs from "./components/tabs"

// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import Edit from "./components/edit";
// import Create from "./components/create";
// import RecordList from "./components/recordList";

// import SignIn from "./components/signin"

const App = () => {
  return (
    <div className="App">
        <Tabs />
      {/*<Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>*/}
    </div>
  );
};

export default App;