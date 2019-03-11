import React, { Component } from "react";

import { Provider } from "react-redux";

import store from "./store";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
