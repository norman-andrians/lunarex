import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import WImage from "./assets/wallpaper-images/128387.png";

let _wimage = WImage;

function livelyPropertyListener (name, val) {
  switch (name) {
    case "bgImage":
      _wimage = val;
      break;
  }
}

const prefixFunctionThatMade = () => {
  var sapa = "Hello";
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App wimage={_wimage} />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
