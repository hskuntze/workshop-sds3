//Fazer download do ApexCharts para utilizar os gráficos
//yarn add apexcharts react-apexcharts
import Chart from 'react-apexcharts';

function BarChart(){
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    //Parâmetro "...{var}" -> reaproveite o objeto e adicione '...'
    //no Eixo X (xaxis), exiba os valores: mockData.labels
    return(
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="300"
        /> //'options' entre "{}" é a var. de BarChart; options que recebe o valor é atributo JSX
    );
}

export default BarChart;