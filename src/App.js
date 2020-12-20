import React from "react";
import "./styles.css";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}
