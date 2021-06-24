import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import transactionsdata from '../Data/transaction.json';
import '../css/transactions.css';

function Transactions() {
    const [filter,setFilter] =  useState(false);
    const [period, setPeriod] = useState('');
    const [category, setCategory] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    
    useEffect(()=>{
        setTransactions(transactionsdata);
        setFilteredTransactions(transactionsdata);
    },[])
    const displayFilterOption = ()=>{
        setFilter(!filter)
    }   
    const handlePeriodChange = (value)=>{
    }
    const handleFilter = ()=>{
     //filter
     setFilteredTransactions(
            transactions.filter((trans)=>{
            //if period is empty, filter on by category, if category is empty filter by period only 
            if(trans.category === category || category === ''){
                return true
            }else{return false}})
         )
         displayFilterOption();
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
                        <button  onClick={()=>setCategory('')} className={`filter__option ${category === ''?'filter__option--active':''}`} >All transactions</button>
                        <button onClick={()=>setCategory('cashAdvance')} className={`filter__option ${category === 'cashAdvance'?'filter__option--active':''}`}>Cash Advance</button>
                        <button onClick={()=>setCategory('billPayment')} className={`filter__option ${category === 'billPayment'?'filter__option--active':''}`}>Bill Payments</button>
                        <button onClick={()=>setCategory('balanceTransfer')} className={`filter__option ${category === 'balanceTransfer'?'filter__option--active':''}`}>Balance transfer</button>
                        <button onClick={()=>setCategory('loanRepayment')} className={`filter__option ${category === 'loanRepayment'?'filter__option--active':''}`}>Loan Repayment</button>
                        <button onClick={()=>setCategory('statementCredit')} className={`filter__option ${category === 'statementCredit'?'filter__option--active':''}`}>Statement Credit</button>
                    </div>
                </div>
                <div className="filter__head">
                    <div className="filter__buttonside"><button className="filter__button" onClick={handleFilter}>filter</button></div>
                </div>
            </div>     
            </div>
            <div className="transactions__table--container">
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
                    {filteredTransactions.map((transaction)=>{
                        return(<tr >
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
        </div>
    )
}

export default Transactions
