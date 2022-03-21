import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';
import { Transaction } from '../components/dated-transaction';

function AllData() {
    const ctx = React.useContext(UserContext);
    console.log(ctx);
    console.log("ctx users is");
    console.log(ctx.users);
    
    return (
        <Card
            bgcolor="primary"
            header="All Data"
            body={<div>
                {ctx.users.map((user, index) => {
                    return (
                    <Card
                        key={index}
                        bgcolor="secondary"
                        header={`${user.name} - ${user.email}`}
                        body={<div>
                            <h6>Password:</h6>
                            <p>{user.password}</p>
                            <h6>Balance:</h6>
                            <p>{user.balance}</p>
                            <h6>Transaction History:</h6>
                            {user.history.map((transaction, i) => 
                                <Transaction key={i} t={transaction}/>
                            )}
                            </div>
                        }

                    
                    />
                    );
                }
                )}
                </div>
           }
        
        
        
        
        
        
        
        
        
        />
    );
}

export default AllData