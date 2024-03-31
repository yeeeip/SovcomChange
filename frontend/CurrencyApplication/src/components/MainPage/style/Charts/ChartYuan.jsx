import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ChartP = styled.p`
    margin-top: 10px;
    margin-right: 10px;
    font-family: TT Travels;
    font-size: 14px;
    font-weight: 600;
    line-height: 13.76px;
    text-align: left;
    color: #213A8B;

    display: flex;
    justify-content: flex-end;
`
  const ChartSpan = styled.span`
    margin-top: 10px;
    margin-right: 10px;
    font-family: TT Travels;
    font-size: 14px;
    font-weight: 400;
    line-height: 13.76px;
    text-align: left;
    color: #213A8B;

    display: flex;
    justify-content: flex-end;
`

export let priceChange;
export let dayUpdateCourse;
  
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }, 
  },
};

export function ChartYuan() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            borderColor: 'rgb(33, 58, 139)',
            backgroundColor: 'rgb(241, 247, 255)',
          },
        ],
      });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //тут шаманство со временем
        Date.prototype.subtractDays = function(nrOfDays) {
          var day = 1000 * 60 * 60 * 24;
          return new Date(this - (day * nrOfDays));
        }
        const formDate = (inputDate) => {
            const date = new Date(inputDate);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}`;
        } 
        const start_date = new Date()
            .subtractDays(9)
            .toLocaleDateString()
            .split("")
            .map(item => item === '.' ? '/' : item)
            .join('');
        const end_date = new Date().toLocaleDateString().split("").map(item => item === '.' ? '/' : item).join('');

        const response = await axios({
          method: 'get',
          url: `https://3e98-95-26-80-219.ngrok-free.app/api/v1/daily_rates?start_date=${start_date}&end_date=${end_date}&cur=CNY`,
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": true,
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NEBnbWFpbC5jb20iLCJpZCI6MTUxLCJlbWFpbCI6InRlc3Q0QGdtYWlsLmNvbSIsImlhdCI6MTcxMTkwNDMwMywiZXhwIjoxNzExOTA2MTAzfQ.sNKTLQmkx1IwTkhNJpEaeKjkh3hjVhLQQ3J0phdpB768uT61iZ_YvLxJ_qS98JT-S0bwAzXV1LbRyTjJTxpfSA'
          }
        });
        console.log(response.data.rates)
        const data = response.data;
        const labels = data.rates.map(entry => formDate(entry.time));
        const values = data.rates.map(entry => entry.cur_unit_rate);

        priceChange = data.rates[6].cur_unit_rate - data.rates[5].cur_unit_rate;
        dayUpdateCourse = new Date(data.rates[6].time).toLocaleDateString();
        console.log(priceChange.toFixed(2))
        setChartData({
          labels,
          datasets: [
            {
              label: '',
              data: values,
              borderColor: 'rgb(33, 58, 139)',
              backgroundColor: 'rgb(241, 247, 255)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return(

        <div>
            <Line options={options} data={chartData} />
            <ChartP style={{ color: priceChange >= 0 ? 'green' : 'red' }}>{priceChange && priceChange.toFixed(3)}</ChartP>
            <ChartSpan>{`Последнее обновление курса: ${dayUpdateCourse}`}</ChartSpan>
        </div>
    );
}