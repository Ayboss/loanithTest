import React from 'react';
import {useParams} from 'react-router-dom';

function Transaction() {
    const {id} = useParams();
    return (
        <div className="transaction">
            <ul className="transaction__list">
                <li className="transaction__detail">
                    <h3>Date and Time</h3>
                    <p>Monday May 21, 2021. 15:00pm </p>
                </li>
                <li className="transaction__detail">
                    <h3>Recipient UID</h3>
                    <p>51299203410249924053</p>
                </li>
                <li className="transaction__detail">
                    <h3>Recipient Name</h3>
                    <p>John Doe</p>
                </li>
                <li className="transaction__detail">
                    <h3>Category</h3>
                    <p>Bill Payments</p>
                </li>
                <li className="transaction__detail">
                    <h3>Amount</h3>
                    <p>$5,300</p>
                </li>
                <li className="transaction__detail">
                    <h3>Fulfilled by Statement Credit</h3>
                    <p>51299203410249924053</p>
                </li>
                <li className="transaction__detail">
                    <h3>Fulfilled by Credit limit</h3>
                    <p>51299203410249924053</p>
                </li>
                <li className="transaction__detail">
                    <h3>Commision</h3>
                    <p>$3,000</p>
                </li>
                <li className="transaction__detail">
                    <h3>Vat</h3>
                    <p>$1,000</p>
                </li>
                <li className="transaction__detail">
                    <h3>Credit Offer</h3>
                    <p>$30</p>
                </li>
            </ul>
        </div>
    )
}

export default Transaction
