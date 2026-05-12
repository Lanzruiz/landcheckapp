import React, { Fragment, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Properties from "./components/pages/properties";
import Dashboard from "./components/pages/dashboard";
import setAuthToken from "./components/utils/setAuthToken";
// Redux
import { Provider } from "react-redux";
import store from "./components/state/store";
import { loadUser } from "./components/state/actions/auth";

import "./App.css";



const App = () => {
   useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
    }
    store.dispatch(loadUser());
  }, []);

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
