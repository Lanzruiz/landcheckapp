import React, { Fragment } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Properties from "./components/pages/properties";
import Dashboard from "./components/pages/dashboard";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./components/state/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Fragment>
    </Provider>
  );
}

export default App;
