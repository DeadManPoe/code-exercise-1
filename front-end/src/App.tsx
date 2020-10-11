import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/navigation/layout";
import Home from "./pages/home";
import FavouritesContextProvider from "context/favourites-context-provider";

function App() {
  return (
    <FavouritesContextProvider>
      <Layout>
        <Home />
      </Layout>
    </FavouritesContextProvider>
  );
}

export default App;
