import React                    from 'react';
import { UserContext }          from '../components/user-context';
import Card                     from '../components/card';
import { datedTransaction }     from '../components/dated-transaction';
import validate                 from '../components/validate';

function Deposit() {
    // Set the Context
    const ctx = React.useContext(UserContext);

    // Set the state variables
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState(0);
    const [message, setMessage]   = React.useState(null);
    const [enable, setEnable]     = React.useState(false);
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });
    
    function handleSubmit() {
        // Display an error if the deposit is negative
        if (deposit <= 0) {
            setMessage('Please enter a number greater than zero');
            return;
        }
        let i = ctx.userIndex;
        let currentBalance = Number(ctx.users[i].balance);
        ctx.users[i].balance = currentBalance + Number(deposit);
        const currentTransaction = datedTransaction(deposit);
        ctx.users[i].history.splice(0,0,currentTransaction);
        ctx.currentUser = ctx.users[i];
        setMessage(`Successfully deposited $${deposit}`)
        setDeposit(0)
        setEnable(false);
    };

    // Validate all fields using the validate function inported from validate
    const validateThis = () => {
        if (validate(deposit, 'please an amount to deposit', setStatus))
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
        <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                    <h5>Welcome {ctx.currentUser.name}</h5>
                    <h6>Your current balance is:</h6>
                    <h6>${ctx.currentUser.balance}</h6>
                    Deposit<br/>
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => {makeChange(e, setDeposit)}}/><br/>
                    <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Deposit</button><br/><br/>
                    {message && <h5>{message}</h5>}
                </>
            ):(
                <>
                    <h5>You must log in to proceed</h5>
                </>
            )}
        />
    );
}

export default Deposit;