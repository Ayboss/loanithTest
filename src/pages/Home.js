import React from 'react'
import StatCard from '../components/StatCard'
import Graph from '../components/Graph'
import '../css/home.css';

function Home() {
    return (
        <div className="home__body">
            <div className="home__stats">
                <h3 className="home__stats-heading">ACCOUNT STATS</h3>
                <StatCard title="Account Limit" figure="$2,000" stroke="red" />
                <StatCard title="Credit Limit" figure="$2,500" stroke="blue"/>
                <StatCard title="Credit Balance" figure="$3,206" stroke="green"/>
                <StatCard title="Statement Credit" figure="$500" stroke="gold"/>
                <StatCard title="Default Amount" figure="$4,300"/>
                <h3 className="home__stats-heading">Users STATS</h3>
                <StatCard title="Account Holders" figure="300"/>
                <StatCard title="Newsletter Subscribers" figure="300"/>
                <StatCard title="OpenConplaints" figure="20"/>
            </div>
            <div className="home__graphs">
                <Graph />
                <Graph />
            </div>
        </div>
    )
}

export default Home
