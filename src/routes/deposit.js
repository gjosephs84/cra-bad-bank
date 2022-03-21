import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';
import { datedTransaction } from '../components/dated-transaction';

function Deposit() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState(0);
    const [message, setMessage]   = React.useState(null)
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });
    
    function handleSubmit() {
        console.log(`Deposit is ${deposit}`);
        let i = ctx.userIndex;
        let currentBalance = Number(ctx.users[i].balance);
        ctx.users[i].balance = currentBalance + Number(deposit);
        const currentTransaction = datedTransaction(deposit);
        console.log(`Current Transaction is ${JSON.stringify(currentTransaction)}`);
        ctx.users[i].history.splice(0,0,currentTransaction);
        console.log(`New balance is ${ctx.users[i].balance}`);
        ctx.currentUser = ctx.users[i];
        setMessage(`Successfully deposited $${deposit}`)
        setDeposit(0)

    }

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
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit}>Deposit</button><br/><br/>
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