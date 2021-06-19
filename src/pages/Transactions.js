import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import transactionsdata from '../Data/transaction.json';
import '../css/transactions.css';

function Transactions() {
    const [filter,setFilter] =  useState(false);
    const [period, setPeriod] = useState('');
    const [transactions, setTransactions] = useState([])
    // console.log(transactionsdata);
    useEffect(()=>{
        setTransactions(transactionsdata);
    },[])
    const displayFilterOption = ()=>{
        setFilter(!filter)
    }   
    const handlePeriodChange = (value)=>{
    }
    const handleFilter = ()=>{
        
    }
    const renderDescription = (description)=>{
        if(description.length > 40){
            return(<><p className="transactions__description-less">{description.slice(0,30)+"..."}</p>
                <p className="transactions__description-more">{description}</p></>)
        }else{ 
            return(<p>{description}</p>)
        }
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
                        <button onClick={()=>setPeriod('today')} className={`filter__option ${period === 'today'?'filter__option--active':''}`}>Today</button>
                        <button onClick={()=>setPeriod('week')} className={`filter__option ${period === 'week'?'filter__option--active':''}`}>Last 7 days</button>
                        <button onClick={()=>setPeriod('month')} className={`filter__option ${period === 'month'?'filter__option--active':''}`}>30 days</button>
                        <button onClick={()=>setPeriod('year')} className={`filter__option ${period === 'year'?'filter__option--active':''}`}>1 year</button>
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
                        <button className="filter__option filter__option--active">Bill Payments</button>
                        <button className="filter__option">Balance transfer</button>
                        <button className="filter__option">Loan Repayment</button>
                        <button className="filter__option">Statement Credit</button>
                    </div>
                </div>
                <div className="filter__head">
                    <div className="filter__buttonside"><button className="filter__button" onClick={handleFilter}>filter</button></div>
                </div>
            </div>     
            </div>
            <table className="transactions__table">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Transaction id</th>
                    <th>Initiator Uid</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction)=>{
                        return(<tr>
                            <td>{transaction.date}</td>
                            <td><Link to={`/transactions/${transaction.transactionId}`}>{transaction.transactionId}</Link></td>
                            <td><Link to={`/users/${transaction.initiatorId}`}>{transaction.initiatorId}</Link></td>
                            <td className="transactions__description">
                                {renderDescription(transaction.description)}
                            </td>
                            <td>{transaction.type}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.status}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Transactions
