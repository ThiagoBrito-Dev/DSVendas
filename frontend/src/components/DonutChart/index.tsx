import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: Array<string>;
  series: Array<number>;
}

export default function DonutChart() {
  let chartData: ChartData = { labels: [], series: [] }

  const options = {
    legend: {
      show: true
    }
  };

  axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
    const data = response.data as Array<SaleSum>
    const myLabels = data.map(x => x.sellerName)
    const mySeries = data.map(x => x.sum)

    chartData = { labels: myLabels, series: mySeries }
    console.log(chartData)
  })

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Obi-Wan', 'Luke', 'Padmé', 'Snape']
  // }

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height={240}
    />
  );
}