import Card from '../components/card';
import image from '../images/bank.png'

function Home() {
    return (
       <Card
            txtcolor="white"
            bgcolor="main"
            header="Bad Bank Landing Page"
            title="Welcome to the Bank"
            text="Use at your own risk!"
            body={<img src={image} style={{width: 250}}></img>}
       />
    );
}

export default Home;