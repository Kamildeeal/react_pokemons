import React from "react";
import "./styles/styles.css";
import Header from "./compontents/Header";
import Main from "./compontents/Main";
import Footer from "./compontents/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return (
    <div className="app-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
