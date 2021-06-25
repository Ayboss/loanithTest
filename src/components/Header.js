import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/header.css';

function Header() {
    const [toggle, setToggle] = useState(false);
    const handleLabel = ()=>{
        setToggle(!toggle)
    }
    return (
        <header className="header">
            <span className="header__logo">
                <div class="logo"></div>Loanith
            </span>
            <label onClick={handleLabel} className="togglebtn"><div></div></label>
            <ul className={`header__navList ${!toggle?'header__logo--show':''}`}>
                <li className="header__navItem"><NavLink activeClassName="header__link--active" className="header__link" exact to="/">Home</NavLink></li>
                <li className="header__navItem"><NavLink activeClassName="header__link--active" className="header__link" to="/transactions">Transactions</NavLink></li>
                <li className="header__navItem"><NavLink activeClassName="header__link--active" className="header__link" to="/users">Users</NavLink></li>
                <li className="header__navItem"><NavLink activeClassName="header__link--active" className="header__link" to="/subscription">Subscription</NavLink></li>
                <li className="header__navItem"><NavLink activeClassName="header__link--active" className="header__link" to="/complaints">Complaint</NavLink></li>
            </ul>
        </header>
    )
}

export default Header
