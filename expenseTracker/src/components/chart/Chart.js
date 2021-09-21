import ChartBar from "./ChartBar";
import "./Chart.css"


const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map(datapoint=> datapoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">

            {props.dataPoints.map(datapoint => <ChartBar value={datapoint.value} 
            key={datapoint.label}
            maxValue={totalMaximum}
            
            label={datapoint.label}></ChartBar>)}



        </div>

 


    )




}

export default Chart;