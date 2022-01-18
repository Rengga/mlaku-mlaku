import React from "react";
import { Header, Kategori, Navbar } from "./containers";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Kategori />
    </div>
  );
};

export default App;
