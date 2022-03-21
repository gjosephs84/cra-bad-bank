import Card from '../components/card';

function Home() {
    return (
       <Card
            txtcolor="black"
            header="Bad Bank Landing Page"
            title="Welcome to the Bank"
            text="You can use this bank"
            body={<img src="/images/bank.png" style={{width: 250}}></img>}
       />
    );
}

export default Home;