import Card from '../components/card';
import image from '../images/bank.png'

function Home() {
    return (
       <Card
            txtcolor="white"
            bgcolor="main"
            header="Welcome to Gregory's Bad Bank"
            width="50rem"
            body={
            
            <div className="landing">
            <img src={image} style={{width: 250}}></img>
            <div className="align-right">
                <h4><em>"Where Transparency is our Only Policy"</em></h4>
                <h5 className="pushed">Open an account today and receive:</h5>
                <ul>
                    <li className="extra-pushed">$100 New Account Bonus!</li>
                    <li className="extra-pushed">No fees. Ever!</li>
                    <li className="extra-pushed"> Total exposure of your personal information!</li>
                </ul>
            </div>
            </div>
            
            
            }
       />
    );
}

export default Home;