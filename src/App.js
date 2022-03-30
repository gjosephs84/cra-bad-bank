import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  // I want to use this within the navbar to conditionally render log in
  // or log out. The conditional rendering works, except updating the state
  // of loggedIn doesn't cause the navbar to rerender.
  
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div>
    
      {/* The outlet tag allows the router to render whatever I'm linking to */}
      <NavigationBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <br/>
      <div className="centered">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
