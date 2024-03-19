import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Flexi Cap Fund', 'Small Cap Fund', 'ELSS', 'Index Fund', 'Sectoral Fund', 'Large & Mid Cap Fund'],
    datasets: [
      {
        data: [32.19, 26.40, 26.04, 12.03, 26.40, 12.03],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#E7E9ED',
          '#4BC0C0',
          '#9966FF',
        ],
        borderColor: 'transparent',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const data = context.parsed.y;
            const percentage = (data / 100) * 100;
            return `${label}: ${percentage.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;