import React from "react";
import Header from "./classComp/Header";
import Footer from "./classComp/Footer";
import Main from "./classComp/Main";

function App() {
  return (
    <div>
      <Header />
      <Main name = "갓대희" color="blue"/>
      <Footer />
    </div>
  );
}

export default App;
