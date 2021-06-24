import Header from './components/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js';
import Complaint from './pages/Complaint.js';
import Subscription from './pages/Subscription.js';
import Transactions from './pages/Transactions.js';
import Transaction from './pages/Transaction.js';
import User from './pages/User.js';
import Users from './pages/Users.js';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/complaints">
          <Complaint />
        </Route>
        <Route path="/subscription">
          <Subscription />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/transactions/:id">
          <Transaction/>
        </Route>
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
