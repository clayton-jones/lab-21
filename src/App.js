import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

import "./styles/reset.scss";
import "./styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}
