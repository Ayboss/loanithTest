import React from 'react';

function StatCard({title, figure, stroke='blue',active, onClick}) {
    return (
        <div onClick={onClick} className={`statcard ${active?'statcard-active':''}`}>
            <div>
                <h3 className="statcard__heading">{title}</h3>
                <p className="statcard__figure">{figure}</p>
            </div>
            <svg width={27} xmlns='http://www.w3.org/2000/svg' stroke={stroke} className='ionicon' viewBox='0 0 512 512'>
                <title>Analytics</title>
                <path fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M344 280l88-88M232 216l64 64M80 320l104-104'/>
                    <circle cx='456' cy='168' r='24' fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                    <circle cx='320' cy='304' r='24' fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                    <circle cx='208' cy='192' r='24' fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                    <circle cx='56' cy='344' r='24' fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                </svg>
        </div>
    )
}

export default StatCard
