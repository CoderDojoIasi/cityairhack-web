const temperatureChartElement = document.getElementById('temperature-chart');

const temperatureChartOptions = {
  type: 'pie',
  data: temperatureData,
  options: {
    title: {
      display: true,
      text: 'Temperature Chart'
    }
  }
};

const temperatureChart = new Chart(temperatureChartElement, temperatureChartOptions);
