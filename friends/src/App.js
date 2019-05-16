import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected Page</Link>
      </nav>

      <Route path='/login' component={Login}/>
      <PrivateRoute exact path='/protected' component={FriendsList}/>

    </div>
    </Router>
  );
}

export default App;
