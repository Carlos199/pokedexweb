import React from "react";

import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
import PokemonDetails from "./containers/PokemonDetails";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Favourites from "./containers/Favourites";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppNavigator />
          <Routes>
            <Route exact path='/' element={<Pokedex />} />
            <Route exact path='/pokemon/:id' element={<PokemonDetails />} />
            <Route path='/favourites' element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
