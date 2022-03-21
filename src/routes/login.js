import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';

function Login() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus]               = React.useState('');
    const [email, setEmail]                 = React.useState('');
    const [password, setPassword]           = React.useState('');
    const [errorMessage, setErrorMessage]   = React.useState(null)
    const [show, setShow]                   = React.useState(() => {
        if (ctx.currentUser) {
            return false;
        } else {
            return true;
        }
    });
    

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleSubmit() {
        setErrorMessage(null);
        console.log(email,password);
        if (!validate(email,     'email'))       return;
        if (!validate(password,  'password'))    return;
        let foundUser;
        for (let i=0; i<ctx.users.length; i++) {
            if (ctx.users[i].email == email) {
                if (ctx.users[i].password == password) {
                    foundUser = ctx.users[i];
                    ctx.currentUser = foundUser;
                    ctx.userIndex = i;
                    console.log("Found the user!!!!");
                    console.log(JSON.stringify(foundUser));
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
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit}>Log In</button>
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