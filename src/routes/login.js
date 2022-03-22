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
    const [show, setShow]                   = React.useState(() => {
        if (ctx.currentUser) {
            return false;
        } else {
            return true;
        }
    });
  
    function handleSubmit() {
        setErrorMessage(null);
        if (!validate(email, "please enter the email associated with your account", setStatus))      return;
        if (!validate(password,  'please enter your account password', setStatus))    return;
        let foundUser;
        for (let i=0; i<ctx.users.length; i++) {
            if (ctx.users[i].email == email) {
                if (ctx.users[i].password == password) {
                    foundUser = ctx.users[i];
                    ctx.currentUser = foundUser;
                    ctx.userIndex = i;
                    setEnable(false);
                    setShow(false);
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
    }

    return (
        <Card
            bgcolor="primary"
            header="Login"
            status={status}
            body={show ? (
                <>
                    Email<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {
                        setEmail(e.currentTarget.value);
                        if (validate(email, 'please enter the email associated with your account', setStatus) && validate(password, 'please enter your password', setStatus)) {
                            setEnable(true);
                        }
                        }}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {
                        setPassword(e.currentTarget.value)
                        if (validate(email, 'please enter the email associated with your account', setStatus) && validate(password, 'please enter your password', setStatus)) {
                            setEnable(true);
                        }
                        }}/><br/>
                    <button type="submit" disabled={!enable}className="btn btn-light" onClick={handleSubmit}>Log In</button>
                    <br/><br/>
                    {errorMessage && <h5>{errorMessage}</h5>}
                </>
            ):(
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
                </>
            )}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        />    
    );
}

export default Login;