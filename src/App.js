import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';
import { UserContext } from './components/user-context'

function App() {
  // Defining state variables to conditionally render login or logout
  // in the navbar
  const [loggedIn, setLoggedIn] = React.useState(false);

  // Grabbing the context to insert the state variables for use in the navbar
  const ctx = React.useContext(UserContext);
  
  // Adding the state variables to context. Wahoo! Now they can be used
  // to conditionally render options in the navbar!
  ctx.loginState = [loggedIn, setLoggedIn];
  

  return (
    <div>
    
      {/* The outlet tag allows the router to render whatever I'm linking to */}
      <NavigationBar/>
      <br/>
      <div className="centered">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
