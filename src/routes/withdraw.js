import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';
import { datedTransaction } from '../components/dated-transaction';

function Withdraw() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]   = React.useState(0);
    const [message, setMessage]   = React.useState(null)
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });
    
    function handleSubmit() {
        console.log(`Withdrawal is ${withdraw}`);
        let i = ctx.userIndex;
        let currentBalance = Number(ctx.users[i].balance);
        if (currentBalance < Number(withdraw)) {
            setMessage(`The requested amount exceeds your current balance`);
            setWithdraw(0);
            return;
        }
        ctx.users[i].balance = currentBalance - Number(withdraw);
        const currentTransaction = datedTransaction((0 - Number(withdraw)));
        console.log(`Current Transaction is ${JSON.stringify(currentTransaction)}`);
        ctx.users[i].history.splice(0,0,currentTransaction);
        console.log(`New balance is ${ctx.users[i].balance}`);
        ctx.currentUser = ctx.users[i];
        setMessage(`Successfully withdrew $${withdraw}`)
        setWithdraw(0)

    }

    return (
        <Card
            bgcolor="primary"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    <h5>Welcome {ctx.currentUser.name}</h5>
                    <h6>Your current balance is:</h6>
                    <h6>${ctx.currentUser.balance}</h6>
                    Withdraw<br/>
                    <input type="number" className="form-control" id="withdraw" placeholder="Enter amount to withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit}>Withdraw</button><br/><br/>
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

export default Withdraw;