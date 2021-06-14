import React, {useState} from 'react'
import StatCard from '../components/StatCard'
import Graph from '../components/Graph'
import '../css/home.css';

const graphData = {
    accountLimit: {
        color: 'red',
        data:[0, 5,7,20,25,34,40,45,51,40,55,57]
    },
    creditLimit: {
        color: 'blue',
        data:[4,3,10,23,25,30,30,45,52,41,55,60]
    },
    creditBalance: {
        color: 'green',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    },
    statementCredit: {
        color: 'gold',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    },
    defaultAmount: {
        color: 'pink',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    },
}

function Home() {
    const [account, setAccount] = useState('accountLimit');
    return (
        <div className="home__body">
            <div className="home__stats">
                <h3 className="home__stats-heading">ACCOUNT STATS</h3>
                <StatCard title="Account Limit" figure="$2,000" stroke="red" onClick={()=>setAccount('accountLimit')} active={account === 'accountLimit'} />
                <StatCard title="Credit Limit" figure="$2,500" stroke="blue" onClick={()=>setAccount('creditLimit')} active={account === 'creditLimit'}/>
                <StatCard title="Credit Balance" figure="$3,206" stroke="green" onClick={()=>setAccount('creditBalance')} active={account === 'creditBalance'}/>
                <StatCard title="Statement Credit" figure="$500" stroke="gold" onClick={()=>setAccount('statementCredit')} active={account === 'statementCredit'}/>
                <StatCard title="Default Amount" figure="$4,300" stroke="pink" onClick={()=>setAccount('defaultAmount')} active={account === 'defaultAmount'}/>
                <h3 className="home__stats-heading">Users STATS</h3>
                <StatCard title="Account Holders" figure="300"/>
                <StatCard title="Newsletter Subscribers" figure="300"/>
                <StatCard title="OpenConplaints" figure="20"/>
            </div>
            <div className="home__graphs">
                <Graph data={graphData[account]} name={account}/>
                <Graph data={graphData[account]} name={account}/>
            </div>
        </div>
    )
}

export default Home
