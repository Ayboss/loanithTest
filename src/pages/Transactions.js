import React, {useState} from 'react';
import '../css/transactions.css';

function Transactions() {
    const [filter,setFilter] =  useState(false);
    const displayFilterOption = ()=>{
        setFilter(!filter)
    }
    return (
        <div className="transactions">
            <div className="transactions__heading">
                <p>Transactions</p>
                <div className="transactions__filter" onClick={displayFilterOption}>
                    Filtered transactions from 
                </div>
                <div onClick={displayFilterOption} className={`filter-box ${filter?'filter-box-active':''}`}></div>
                 <div className={`filter ${filter?'filter-active':''}`}>
                <div className="filter__head">Period</div>
                <div className="filter__body">
                    <div className="filter__options">
                        <button className="filter__option">Today</button>
                        <button className="filter__option">Last 7 days</button>
                        <button className="filter__option">30 days</button>
                        <button className="filter__option">1 year</button>
                    </div>
                    <div className="filter__dates">
                        <input type="date" placeholder="start date" />
                        <input type="date" placeholder="start date" />
                    </div>
                </div>
                <div className="filter__head">Category</div>
                <div className="filter__body">
                    <div className="filter__options">
                        <button className="filter__option">All transactions</button>
                        <button className="filter__option">Cash Advance</button>
                        <button className="filter__option">Bill Payments</button>
                        <button className="filter__option">Balance transfer</button>
                        <button className="filter__option">Loan Repayment</button>
                        <button className="filter__option">Statement Credit</button>
                    </div>
                </div>
            </div>     
            </div>
            <table className="transactions__table">
                <thead>
                    <th>Date</th>
                    <th>Transaction id</th>
                    <th>Initiator Uid</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Tuesday May 4, 2021</td>
                        <td>4298910104910</td>
                        <td>24352242424343</td>
                        <td className="transactions__description">
                            <p className="transactions__description-less">this is the hair i breath ....</p>
                            <p className="transactions__description-more">lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            </p>
                        </td>
                        <td>credit</td>
                        <td>$10000</td>
                        <td>success</td>
                    </tr>
                    <tr>
                        <td>Tuesday May 4, 2021</td>
                        <td>4298910104910</td>
                        <td>24352242424343</td>
                        <td className="transactions__description">
                            <p className="transactions__description-less">this is the hair i breath ....</p>
                            <p className="transactions__description-more">lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            </p>
                        </td>
                        <td>credit</td>
                        <td>$10000</td>
                        <td>success</td>
                    </tr>
                    <tr>
                        <td>Tuesday May 4, 2021</td>
                        <td>4298910104910</td>
                        <td>24352242424343</td>
                        <td className="transactions__description">
                            <p className="transactions__description-less">this is the hair i breath ....</p>
                            <p className="transactions__description-more">lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            </p>
                        </td>
                        <td>credit</td>
                        <td>$10000</td>
                        <td>success</td>
                    </tr>
                    <tr>
                        <td>Tuesday May 4, 2021</td>
                        <td>4298910104910</td>
                        <td>24352242424343</td>
                        <td className="transactions__description">
                            <p className="transactions__description-less">this is the hair i breath ....</p>
                            <p className="transactions__description-more">lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            </p>
                        </td>
                        <td>credit</td>
                        <td>$10000</td>
                        <td>success</td>
                    </tr>
                    <tr>
                        <td>Tuesday May 4, 2021</td>
                        <td>4298910104910</td>
                        <td>24352242424343</td>
                        <td className="transactions__description">
                            <p className="transactions__description-less">this is the hair i breath ....</p>
                            <p className="transactions__description-more">lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            lorem ipsum this is the hair i breath
                            </p>
                        </td>
                        <td>credit</td>
                        <td>$10000</td>
                        <td>success</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions
