import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Home}></Route>
            <Route path="/review" component={OrderReview}></Route>
            <Route exact path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
