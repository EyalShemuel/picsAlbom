import React , { useState } from "react";

import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import "./App.css";

// components
import AlbumPage from "./features/Album/AlbumPage";
import AddPictures from "./features/Album/AddPictures";
import AddUser from "./features/Users/AddUser";
import Users from "./features/Users/Users";
import LongMenu from "./features/basics/menu";

function App() {
  const [CurrentUser,setCurrentUser] = useState('');
  return (
    <Router>
      <LongMenu
      CurrentUser = {CurrentUser}
      />
      <div className="App-header">
        <h1>Image Albums</h1>
      </div>
      <div className="App">
        <Switch>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route exact path="/"render = {props => <Users {...props} />}/> 
          <Route path="/AddPictures/:userID" render = {props => <AddPictures {...props} />}/>
          <Route path="/Album/:userID" render = {props => <AlbumPage CurrentUser={CurrentUser} setCurrentUser={setCurrentUser} /> }/>                           
        </Switch>
      </div>
    </Router>
  );
}

export default App;

