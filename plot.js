

// Get the HTML canvas by its id 
plots1 = document.getElementById("plots1");
plots2 = document.getElementById("plots2");

const labels = ['Temperatura'];
const labels2 = ['umidade'];

const data = labels.map(l => Math.floor(Math.random() * 100) + 1);
const data2 = labels2.map(l => Math.floor(Math.random() * 75) + 1);


const sortedData = data.slice().sort((a, b) => a - b);
const sortedData2 = data2.slice().sort((a, b) => a - b);

if(sortedData >= 45 && sortedData2 <= 50){
  alert("tá fumando a sua planta? o clima da está péssimo!!!");
} else if( sortedData <= 15 && sortedData2 >= 50){
  alert("a temperatura está muito baixa!");
} else if(sortedData >= 45 && sortedData2 >= 50){
  alert("a temperatura está muito alta!");
} else if(sortedData2 <= 50){
  alert("o clima está muito seco!");
}


console.log(sortedData);
console.log(data.length);

const backgroundColors = data.map(v => sortedData >= 45 || sortedData <= 15 ? 'red' : 'green');
const backgroundColors2 = data.map(v => sortedData2 <= 50 ? 'red' : 'green');


// Create an instance of Chart object:
new Chart(plots1, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: data,
        backgroundColor: backgroundColors,
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false}, //Remove the legend box by setting it to false. It's true by default. ,
      scales: {
        maintainAspectRatio: false,
        yAxes: [{
            ticks: {
                beginAtZero:true,
                steps: 20,
                stepValue: 10,
                max: 100
            }
        }],
        xAxes: [{
          barThickness: 10,  // number (pixels) or 'flex'
          maxBarThickness: 20 // number (pixels)
      }]
          ,
        responsive: true
      }
    
      
    
    }
  });

  new Chart(plots2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [{
        label: '# of Votes',
        data: data2,
        backgroundColor: backgroundColors2
        ,
        borderWidth: 1
      }]
    },
    options: {
      legend: {display: false}, //Remove the legend box by setting it to false. It's true by default. 
      scales: {
        maintainAspectRatio: false,
        yAxes: [{
            ticks: {
                beginAtZero:true,
                steps: 20,
                                stepValue: 10,
                                max: 100
            }
        }],
        xAxes: [{
          barThickness: 10,  // number (pixels) or 'flex'
          maxBarThickness: 20 // number (pixels)
      }]
          ,
        responsive: true
      }
    
      
    
    }
  });
