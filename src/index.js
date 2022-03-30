import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserContext} from './components/user-context'

//import the routes
import Home from './routes/home';
import CreateAccount from './routes/createaccount';
import Login from './routes/login';
import Deposit from './routes/deposit';
import Withdraw from './routes/withdraw';
import History from './routes/transaction-history';
import AllData from './routes/alldata';

// Maybe try to use this for getting the navbar to rerender on login/out?
import {loggedIn, setLoggedIn} from './App';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

{/* Wrap everything below in UserContext.Provider to make context available
to all the associated routes. Then define how the context object is going to 
look initially */}

      <UserContext.Provider value={
                {users:[
                    { name:'Gregory',
                      email:'greg@josephs.com',
                      password:'notsecure',
                      balance:100,
                      history:[] }
                ],
                currentUser: null,
                userIndex: null,
                }
            } >
      <Routes>

{/* Can pass props to each of the components below within the curly braces
for element within each route */}

        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="login" element={<Login/>} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transaction-history" element={<History />} />
          <Route path="alldata" element={<AllData />} />
        </Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);