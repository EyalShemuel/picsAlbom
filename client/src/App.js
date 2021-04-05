import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

// components
import AlbumPage from "./features/Album/AlbumPage";
import AddPictures from "./features/Album/AddPictures";
import AddUser from "./features/Users/AddUser";
import Users from "./features/Users/Users";
import LongMenu from "./features/basics/menu";

function App() {
  return (
    <Router>
      <LongMenu />
      <div className="App-header">
        <h1>Image Albums</h1>
      </div>
      <div className="App">
        <Switch>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/AddPictures">
            <AddPictures />
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

{
  /* <Image 
        src='https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03-696x522.jpg.webp'
        size='S'/> */
}
