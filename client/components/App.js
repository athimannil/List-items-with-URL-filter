import React from "react";
import { Newslist } from './newslist/Newslist';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Newslist />
      </div>
    );
  }
}

export default App;
