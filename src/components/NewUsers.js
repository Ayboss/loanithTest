import React from 'react';
import {Link} from 'react-router-dom';
import call from '../Assets/call.svg';
import message from '../Assets/message.svg';

function NewUsers() {
    return (
        <table className="transactions__table">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>call</th>
                    <th>message</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to={`/users/635454wt5grgw343`}>John Doe</Link></td>
                    <td>238472903944</td>
                    <td>johndoe@gmail.com</td>
                    <td><img className="table__icon" src={call} alt="call"/></td>
                    <td><img className="table__icon" src={message} alt="message"/></td>
                </tr>
            </tbody>
        </table>             
    )
}

export default NewUsers
