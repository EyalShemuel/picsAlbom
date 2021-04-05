import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,useParams } from 'react-router-dom';
import './App.css';

// components
import Button from './features/basics/Button';
import AlbumPage from './features/Album/AlbumPage';
import AddUser from './features/Users/AddUser';
import Users from './features/Users/Users';
import LongMenu from './features/basics/menu'

//https://www.youtube.com/watch?v=xSAnMp5UxLI&t=599s
function App() {
  return (
    <Router>
     <LongMenu />
      <div className="App">
      
      <header className="App-header">
        <h1 style={{marginTop:"0"}}>Image Albums</h1>
      </header>


      <Switch>
        <Route path="/AddUser">
          <AddUser />
        </Route>
        <Route path="/Album/:userID">
            <AlbumPage />
          </Route> 
          <Route exact path="/">
            <Users />
          </Route>
      </Switch>
       
       
        
         
        
           
         
      
      </div>

      
    </Router>
  );
}

export default App;


  {/* <Image 
        src='https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp'
        size='S'/> */}