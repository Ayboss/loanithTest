import React from 'react'
import {Link} from 'react-router-dom';
import call from '../Assets/call.svg';
import message from '../Assets/message.svg';

function DelinquentUsers() {
    return (
        <table className="transactions__table">
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>call</th>
                <th>message</th>
                <th>Bar</th>
                <th>Lock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Link to={`/users/635454wt5grgw343`}>Bisola Doe</Link></td>
                <td>238472903944</td>
                <td>delinquesent@gmail.com</td>
                <td><img className="table__icon" src={call} alt="call"/></td>
                <td><img className="table__icon" src={message} alt="message"/></td>
                <td><button className="table__button">Bar</button></td>
                <td><button className="table__button">Lock</button></td>
            </tr>
            <tr>
                <td><Link to={`/users/635454wt5grgw343`}>Dorathy Doe</Link></td>
                <td>238472903944</td>
                <td>bisoladoe@gmail.com</td>
                <td><img className="table__icon" src={call} alt="call"/></td>
                <td><img className="table__icon" src={message} alt="message"/></td>
                <td><button className="table__button">Bar</button></td>
                <td><button className="table__button">Lock</button></td>
            </tr>
        </tbody>
    </table>
    )
}

export default DelinquentUsers
