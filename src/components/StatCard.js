import React from 'react'

function StatCard({title, figure}) {
    return (
        <div className="statcard">
            <h3 className="statcard__heading">{title}</h3>
            <p className="statcard__figure">{figure}</p>
        </div>
    )
}

export default StatCard
