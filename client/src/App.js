import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Button from './features/baisic/Button';
import AlbomPage from './features/Albom/AlbomPage';

import AddUser from './features/Users/AddUser';

function App() {
  return (
    <Router>
     
      <div className="App">
      <Switch>
        <Route path="/AddUser">
          <AddUser />
        </Route>
        <Route path="/Albom">
            <AlbomPage />
          </Route> 
      {/*     <Route path="/">
            <Cars />
          </Route> */}
      </Switch>
        <header className="App-header">
          {/* <Image 
        src='https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp'
        size='S'/> */}
         
            <Link to="/AddUser" style={{textDecoration:"none"}}> <Button value="+" /></Link> 
         
        </header>
      </div>

      
    </Router>
  );
}

export default App;
