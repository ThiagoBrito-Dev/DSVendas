import Chart from 'react-apexcharts';

export default function DonutChart() {
  const options = {
    legend: {
      show: true
    }
  };

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Obi-Wan', 'Luke', 'Padmé', 'Snape']
  }

  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height={240}
    />
  );
}