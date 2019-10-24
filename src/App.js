import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/home';
import More from './containers/more';
import Final from './containers/final';

function App() {
  return (
    <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/more">More</Link>
      <Link to="/final">Final</Link>

    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/more" component={More} />
      <Route exact path="/final" component={Final} />
    </main>
  </div>
  );
}

export default App;
