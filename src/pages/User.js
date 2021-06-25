import React from 'react';
import peeps from '../Assets/users.jpg';
import '../css/user.css';

function User() {
    return (
        <div class="user">
            <h2 className="user__heading">Personal Information</h2>
            <div className="user__details">
                <img src={peeps} alt="user" className="user__img" />
                <div className="user__box">
                    <h3>Full Name</h3>
                    <p>John Doe</p>
                </div>
                <div className="user__box">
                    <h3>Phone number</h3>
                    <p>081320549544</p>
                </div>
                <div className="user__box">
                    <h3>Email</h3>
                    <p>johndoe@gmail.com</p>
                </div>
                <div className="user__box">
                    <h3>Address</h3>
                    <p>2, unilag road Akoka</p>
                </div>
                <div className="user__box">
                    <h3>Gender</h3>
                    <p>male</p>
                </div>
                <div className="user__box">
                    <h3>Employment</h3>
                    <p>Student</p>
                </div>
            </div>
            <h2 className="user__heading">Account Information</h2>
            <div className="user__details">
            <div className="user__box">
                    <h3>User ID</h3>
                    <p>2432jk265922i4092no4tr</p>
                </div>
                <div className="user__box">
                    <h3>Trust Score</h3>
                    <p>5</p>
                </div>
                <div className="user__box">
                    <h3>Account Status</h3>
                    <p>Pending</p>
                </div>
                <div className="user__box">
                    <h3>Account Limit</h3>
                    <p>20,000</p>
                </div>
                <div className="user__box">
                    <h3>Credit Limit</h3>
                    <p>4,000</p>
                </div>
                <div className="user__box">
                    <h3>Credit Balance</h3>
                    <p>2,000</p>
                </div>
                <div className="user__box">
                    <h3>Statement Credit</h3>
                    <p>2,500</p>
                </div>
                <div className="user__box">
                    <h3>Referral ID</h3>
                    <p>4343iu324nk24o4342</p>
                </div>
            </div>    
            <h2 className="user__heading">
                Next Of Kin
            </h2>
            <div className="user__details">
                <div className="user__box">
                    <h3>Full Name</h3>
                    <p>John Senior</p>
                </div>
                <div className="user__box">
                    <h3>Phone number</h3>
                    <p>091320549544</p>
                </div>
                <div className="user__box">
                    <h3>Email</h3>
                    <p>johnsenior@gmail.com</p>
                </div>
                <div className="user__box">
                    <h3>Address</h3>
                    <p>2, unilag road Akoka</p>
                </div>
                <div className="user__box">
                    <h3>Relationship</h3>
                    <p>Brother</p>
                </div>
            </div>
            <h2 className="user__heading">
                Identity Information
            </h2>
            <div className="user__details">
                <div className="user__box">
                    <h3>Type</h3>
                    <p>Drivers Licences</p>
                </div>
                <div className="user__box">
                    <h3>ID Number</h3>
                    <p>235235623532544</p>
                </div>
                <div className="user__box">
                    <h3>Issuance Date</h3>
                    <p>4, june 2020</p>
                </div>
                <div className="user__box">
                    <h3>Expiry Date</h3>
                    <p>4, january 2021</p>
                </div>
                <div className="user__box">
                    <h3>View ID</h3>
                    <p>345245249847312373</p>
                </div>
            </div>
            <h2 className="user__heading">
                Banking Information
            </h2>
            <div className="user__details">
                <div className="user__box">
                    <h3>Bank Name</h3>
                    <p>Zenith Bank</p>
                </div>
                <div className="user__box">
                    <h3>Account Name</h3>
                    <p>John Doe Nwachukuw</p>
                </div>
                <div className="user__box">
                    <h3>Account Number</h3>
                    <p>3523562344</p>
                </div>
                <div className="user__box">
                    <h3>Account Type</h3>
                    <p>Savings</p>
                </div>
                <div className="user__box">
                    <h3>Bank Verification Number</h3>
                    <p>8737392757329320</p>
                </div>
                <div className="user__box">
                    <h3>View Bank Statement</h3>
                    <p>345245249847312373</p>
                </div>
            </div>
            <h2 className="user__heading">
                Debit Preference
            </h2>
            <div className="user__details">
                <div className="user__box">
                    <h3>Card Number</h3>
                    <p>4637</p>
                </div>
                <div className="user__box">
                    <h3>Card Type</h3>
                    <p>Verve</p>
                </div>
                <div className="user__box">
                    <h3>Debit Date</h3>
                    <p>3, Feb 2022</p>
                </div>
                <div className="user__box">
                    <h3>Minimum Debit Amount</h3>
                    <p>20,000</p>
                </div>
            </div>
            <h2 className="user__heading">
                Payment History
            </h2>
            <div className="user__details">
                <div className="user__box">
                    <h3>Last Payment Date</h3>
                    <p>4, March 2021</p>
                </div>
                <div className="user__box">
                    <h3>Next Repayment Date</h3>
                    <p>9, september 2021</p>
                </div>
            </div>
        </div>
    )
}

export default User
 