import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
