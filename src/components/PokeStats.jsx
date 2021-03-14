import React from 'react'
import { Bar } from 'react-chartjs-2'

import * as S from '../style'

export default ({ stats }) => {

    let statsValues = []

    stats.map(stat => statsValues.push(stat.base_stat))

    return (

        <Bar
            type={Bar}
            data={{
                labels: ["Hp", "Attack", "Defense", "Special Attack", "Special Defese", "Speed"],
                datasets: [{
                    label: 'stat',
                    data: [statsValues[0], statsValues[1], statsValues[2], statsValues[3], statsValues[4], statsValues[5]],
                    backgroundColor: 'slateblue',
                    barPercentage: 1,
                }],
                
            }}
            options= {{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            min: 0
                        }
                    }]
                }
            }}
            width={50}
            height={50}
            
        />
        // stats.map(stat => {
        //     return (
        //         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        //             <h4>{ stat.stat.name }:</h4>
        //             <p> { stat.base_stat }</p>
        //         </div>
        //     )
        // })
    )
}