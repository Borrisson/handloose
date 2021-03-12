import React from "react";
import ReactDOM from 'react-dom'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import Phaser from 'phaser'
import "./index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const game = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scene: {}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ion-phaser ref={el => el.game = game} />
  </React.StrictMode>,
  document.getElementById("root")
);

defineIonPhaser(window);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
