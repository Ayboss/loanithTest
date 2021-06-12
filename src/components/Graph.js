import React from 'react'
import {Line} from 'react-chartjs-2'
function Graph() {
    return (
        <div className="home__graph">
            <Line height={300} width={'100%'}
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
                label: 'Account Limit',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 5,7,20,25,34,40,45,51,40,55,57],
              }]}
            }
            options={{ maintainAspectRatio: false }}
              />
        </div>
    )
}

export default Graph
