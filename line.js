const humidityData = {
  labels: ['January', 'February', 'March'],
  datasets: [{
      label: 'Temperature in C',
      backgroundColor: 'transparent',
      borderColor: randomColor(),
      data: [7, 10, 5]
  }]
};

const humidityChartElement = document.getElementById('humidity-chart');

const chartOptions = {
  type: 'line',
  data: humidityData,
  options: {
    title: {
      display: true,
      text: 'Humidity Chart'
    }
  }
};

const humidityChart = new Chart(humidityChartElement, chartOptions);
