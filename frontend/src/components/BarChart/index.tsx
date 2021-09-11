//Fazer download do ApexCharts para utilizar os gráficos
//yarn add apexcharts react-apexcharts
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[]
    };
    series: SeriesData[];
}

function BarChart(){
    
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/successBySeller`).then( response => {
            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));
            
            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% de Sucesso",
                        data: mySeries                   
                    }
                ]
            });
        } )
    }, []);
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    //Parâmetro "...{var}" -> reaproveite o objeto e adicione '...'
    //no Eixo X (xaxis), exiba os valores: mockData.labels
    return(
        <Chart 
            options={{ ...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="300"
        /> //'options' entre "{}" é a var. de BarChart; options que recebe o valor é atributo JSX
    );
}

export default BarChart;