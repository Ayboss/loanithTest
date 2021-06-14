import React from 'react'
import {Line} from 'react-chartjs-2'
function Graph({data, name}) {
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
                label: name,
                backgroundColor: data?.color,
                borderColor: data?.color,
                data: data?.data,
              }]}
            }
            options={{ maintainAspectRatio: false }}
              />
        </div>
    )
}

export default Graph
