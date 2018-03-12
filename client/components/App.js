import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Newslist } from './newslist/Newslist';

class App extends React.Component {

  render() {
    const urlForNews = 'http://localhost:3000/api/';
    console.log(urlForNews);
    return (
      <Router>
        <Route sensitive={true} path="/:Tag*" render={(props) => (
            <Newslist {...props} />
          )} />
      </Router>
    );
  }
}

export default App;
