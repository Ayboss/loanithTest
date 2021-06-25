import React, {useState, useEffect} from 'react';
import {accountMonth,accountYear,usersYear} from '../Data/graphData'
import StatCard from '../components/StatCard';
import Graph from '../components/Graph';
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
    accountHolder: {
        color: '#00ff26',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    },
    newsletter: {
        color: '#9d7219',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    },
    openComplaints: {
        color: '#c700d9',
        data:[2,6,7,21,22,33,45,45,51,56,58,66]
    }
}

function Home() {
    const [account, setAccount] = useState('accountLimit');
    const [userstat, setUserstat] = useState('accountHolder');
    const [graphDataAccount, setGraphDataAccount] = useState([])
    const [graphDataUsers, setGraphDataUsers] = useState([]);
    const [periodAccount, setPeriodAccount] = useState('year');
    const [periodUser, setPeriodUser] = useState('year');
    useEffect(() => {
        
        if(periodAccount === 'month'){
                setGraphDataAccount(accountMonth);
        }else{
            setGraphDataAccount(accountYear);
        }
        if(periodUser === 'month'){
            setGraphDataUsers(usersYear);
        }else{
         setGraphDataUsers(usersYear);
        }
        
    }, [periodAccount, periodUser])
    
    return (
        <div className="home__body">
            <div className="home__stats">
                <h3 className="home__stats-heading">ACCOUNT STATS</h3>
                <div className="stat__container">
                    <StatCard title="Account Limit" figure="$2,000" stroke="red" onClick={()=>setAccount('accountLimit')} active={account === 'accountLimit'} />
                    <StatCard title="Credit Limit" figure="$2,500" stroke="blue" onClick={()=>setAccount('creditLimit')} active={account === 'creditLimit'}/>
                    <StatCard title="Credit Balance" figure="$3,206" stroke="green" onClick={()=>setAccount('creditBalance')} active={account === 'creditBalance'}/>
                    <StatCard title="Statement Credit" figure="$500" stroke="gold" onClick={()=>setAccount('statementCredit')} active={account === 'statementCredit'}/>
                    <StatCard title="Default Amount" figure="$4,300" stroke="pink" onClick={()=>setAccount('defaultAmount')} active={account === 'defaultAmount'}/>
                </div>
                <h3 className="home__stats-heading">Users STATS</h3>
                <div className="stat__container">
                    <StatCard title="Account Holders" figure="300" stroke="#00ff26" onClick={()=>setUserstat('accountHolder')} active={userstat === 'accountHolder'}/>
                    <StatCard title="Newsletter Subscribers" figure="300" stroke="#9d7219" onClick={()=>setUserstat('newsletter')} active={userstat === 'newsletter'}/>
                    <StatCard title="Open Complaints" figure="20" stroke="#c700d9" onClick={()=>setUserstat('openComplaints')} active={userstat === 'openComplaints'}/>
                </div>
            </div>
            <div className="home__graphs">
                <div className="home__graphsinner">
                    <Graph data={graphDataAccount[account]} name={account} periodClick={setPeriodAccount}/>
                    <Graph data={graphDataUsers[userstat]} name={userstat} periodClick={setPeriodUser} />
                </div>
            </div>
        </div>
    )
}

export default Home
