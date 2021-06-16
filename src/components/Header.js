import React from 'react';
import {Link} from 'react-router-dom';
import '../css/header.css';

function Header() {
    return (
        <header className="header">
            <span className="header__logo">Loanith</span>
            <ul className="header__navList">
                <li className="header__navItem"><Link className="header__link header__link--active" to="/">Home</Link></li>
                <li className="header__navItem"><Link className="header__link" to="/transactions">Transactions</Link></li>
                <li className="header__navItem"><Link className="header__link" to="#">Users</Link></li>
                <li className="header__navItem"><Link className="header__link" to="#">Subscription</Link></li>
                <li className="header__navItem"><Link className="header__link" to="#">Complaint</Link></li>
            </ul>
        </header>
    )
}

export default Header
