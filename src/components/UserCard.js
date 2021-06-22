import React from 'react'

function UserCard({title, figure, onClick}) {
    return (
        <div  className={`statcard`} onClick={onClick}>
            <div>
                <h3 className="statcard__heading">{title}</h3>
                <p className="statcard__figure">{figure}</p>
            </div>
        </div>
    )
}

export default UserCard
