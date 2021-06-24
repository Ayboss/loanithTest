import React from 'react'

function UserCard({title, figure, onClick, active}) {
    return (
        <div className={`statcard ${active?'statcard-active':''}`} onClick={onClick}>
            <div>
                <h3 className="statcard__heading">{title}</h3>
                <p className="statcard__figure">{figure}</p>
            </div>
        </div>
    )
}

export default UserCard