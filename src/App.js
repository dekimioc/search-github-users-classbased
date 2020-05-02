import React from 'react';
import SearchPage from './components/pages/SearchPage/SearchPage';
import Header from './components/components/Header/Header';
import RepoPage from './components/pages/RepoPage/RepoPage';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <Router>
          <Switch>
            <Route path="/search-github-users-classbased" exact component={SearchPage} />
            <Route path="/search-github-users-classbased/repositories" component={RepoPage} />
          </Switch>
        </Router>
      </HashRouter>
    </div>
  );
}

export default App;
