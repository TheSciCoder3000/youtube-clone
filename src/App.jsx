import './App.css';
import Header from './Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Recommended from './Components/Recommended/Recommended'
import Search from './Components/Search/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__viewer">
          <Sidebar />

          <Switch>
            <Route exact path="/search">
              <div className="app__no-results">
                <h3>There are no Results</h3>
                <p>please search for something else</p>
              </div>
            </Route>
            <Route path={`/search/:searchData`}>
              <Search />
            </Route>
            <Route exact path="/">
              <Recommended />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
