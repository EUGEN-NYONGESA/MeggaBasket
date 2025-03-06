import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Index"; // Import default export
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
