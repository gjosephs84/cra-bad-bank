import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';

export const UserContext = React.createContext(null);

function App() {
  

  return (
    <div>
      {/* The outlet tag allows the router to render whatever I'm linking to */}
      <NavigationBar/>
      <UserContext.Provider value={
                {users:[
                    { name:'Gregory',
                      email:'gjosephs@mit.edu',
                      password:'secret',
                      balance:100,
                      history:[] }
                ],
                currentUser: "something",
                userIndex: null
                }
            }>
              <Outlet />
            </UserContext.Provider>
      
    </div>
  );
}

export default App;
