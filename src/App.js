import Header from './components/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js';
import Transactions from './pages/Transactions.js';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
