import React, {useState} from 'react';
import test from '../Data/test.pdf';
import {Line} from 'react-chartjs-2'

function Graph({data, name, periodClick}) {
    const [period, setPeriod] = useState('year');
    const handleSelectChange = (e)=>{
      const {value} = e.target;
      setPeriod(value);
      periodClick(value);
    } 

    return (
        <div className="home__graph">
          <div className="graph__option">
            <select onChange={handleSelectChange} value={period}>
              <option value="year">This Year</option>
              <option value="month">This month</option>
              <option value="week">This week</option>
              <option value="today">Today</option>
            </select>
            <a href={test} download>download csv</a>
          </div>
            <div>
            <Line height={300} width={780} 
            data={
                {labels:[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ],
              datasets: [{
                label: name,
                backgroundColor: data?.color,
                borderColor: data?.color,
                data: data?.data,
              }]}
            }
            options={{ maintainAspectRatio: false, responsive:true }}
              />
              </div>
        </div>
    )
}

export default Graph
