import React from "react";
import { Newslist } from './newslist/Newslist';

class App extends React.Component {

  render() {
    const urlForNews = 'http://localhost:3000/api/';
    console.log(urlForNews);
    return (
      <div className="main">
        <Newslist />
      </div>
    );
  }
}

export default App;
