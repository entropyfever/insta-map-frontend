import React from 'react';
import './App.css';
import MainPage from "./ui-components/main-page";
import {Provider} from "react-redux";
import store from "./redux-store/create-store";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
