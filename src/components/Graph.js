import React from 'react';
import test from '../Data/test.pdf';
import {Line} from 'react-chartjs-2'
function Graph({data, name}) {
    return (
        <div className="home__graph">
          <div className="graph__option">
            <select>
              <option>Today</option>
              <option>This week</option>
              <option>This month</option>
              <option>This Year</option>
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
