import React            from 'react';
import { UserContext }  from '../components/user-context';
import Card             from '../components/card';
import validate         from '../components/validate';

function Login() {
    // Set the Context
    const ctx                               = React.useContext(UserContext);
    
    // Set the state variables
    const [status, setStatus]               = React.useState('');
    const [email, setEmail]                 = React.useState('');
    const [password, setPassword]           = React.useState('');
    const [errorMessage, setErrorMessage]   = React.useState(null);
    const [enable, setEnable]               = React.useState(false);
    // Grab the state variables from context
    const [loggedIn, setLoggedIn]           = ctx.loginState;
    const [show, setShow]                   = React.useState(() => {
        if (ctx.currentUser) {
            return false;
        } else {
            return true;
        }
    });
  
    function handleSubmit() {
        setErrorMessage(null);
        let foundUser;
        for (let i=0; i<ctx.users.length; i++) {
            if (ctx.users[i].email == email) {
                if (ctx.users[i].password == password) {
                    foundUser = ctx.users[i];
                    ctx.currentUser = foundUser;
                    ctx.userIndex = i;
                    setEnable(false);
                    setShow(false);
                    // Update loggedIn to hide 'Login' from navbar
                    setLoggedIn(true);
                    return;
                } else {
                    setErrorMessage("Password Incorrect");
                    return;
                }
            }
        }
        if (!foundUser) {
            setErrorMessage("Email not found");
            return;
        }

    };

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
        ctx.currentUser = null;
        ctx.userIndex = null;
        // Update loggedIn to hide 'Logout' from navbar
        setLoggedIn(false);
    }

    // Validate all fields using the validate function inported from validate
    const validateThis = () => {
        if (validate(email, 'please enter the email associated with your account', setStatus) &&
            validate(password, 'please enter your password', setStatus))
            {
                return true
            } else {
                return false
            };
    };

    // A function to handle the onChange
    const makeChange = (e, setThis) => {
        setThis(e.currentTarget.value);
        if (validateThis())
            {setEnable(true)};
    }; 

    return (
        <div className="centered">
        {show ? (
            <Card
            bgcolor="main"
            header="Login"
            status={status}
            body={
                <>
                    Email<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {makeChange(e, setEmail)}}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {makeChange(e, setPassword)}}/><br/>
                    <button type="submit" disabled={!enable}className="btn btn-light" onClick={handleSubmit}>Log In</button>
                    <br/><br/>
                    {errorMessage && <h5>{errorMessage}</h5>}
                </>}
        /> ):(
            <Card
            bgcolor="main"
            header="Success!"
            status={status}
            body={
                <>
                    <h5>Welcome {ctx.currentUser.name}, you are now logged in.</h5>
                    <br/>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
                </>}
            
        />
        ) }
        
        </div>   
    );
}

export default Login;