import React from 'react'
import StatCard from '../components/StatCard'
import '../css/home.css';

function Home() {
    return (
        <div className="home__body">
            <div className="home__stats">
                <h3 className="home__stats-heading">ACCOUNT STATS</h3>
                <StatCard title="Account Limit" figure="$2,000"/>
                <StatCard title="Credit Limit" figure="$2,500"/>
                <StatCard title="Credit Balance" figure="$3,206"/>
                <StatCard title="Statement Credit" figure="$500"/>
                <StatCard title="Default Amount" figure="$4,300"/>
            </div>
            <div className="home__graphs">

            </div>
        </div>
    )
}

export default Home
