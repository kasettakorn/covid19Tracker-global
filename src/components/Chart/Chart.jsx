
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchDailyAPI = async () => {
            const initialData = await fetchDailyData();
            console.log(initialData);
            
            setDailyData(initialData.slice(initialData.length-7, initialData.length));
        }
        fetchDailyAPI();
    }, []);

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['ติดเชื้อ', 'รักษาหาย', 'เสียชีวิต'],
                    datasets: [
                        {
                            label: 'จำนวน',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `สถานการณ์ Covid-19 ในประเทศ ${country}` },
                }}
            />
        ) : null
    );
    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'ติดเชื้อ',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'เสียชีวิต',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}


export default Chart;