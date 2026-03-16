import {PieChart,Pie,Cell,Tooltip,Legend,BarChart,Bar,XAxis,YAxis} from "recharts"

export default function Analytics(){

const data=[

{ name:"Present", value:42 },

{ name:"Absent", value:5 },

{ name:"Leave", value:3 }

]

const COLORS=["#22c55e","#ef4444","#f59e0b"]

return(

<div style={container}>

<h2>

Attendance Analytics

</h2>

<div style={grid}>

<PieChart width={300} height={300}>

<Pie

data={data}

cx="50%"

cy="50%"

outerRadius={100}

dataKey="value"

>

{

data.map((entry,index)=>(

<Cell key={index} fill={COLORS[index]}/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>


<BarChart width={400} height={300} data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="value" fill="#6366f1"/>

</BarChart>

</div>

</div>

)

}

const container={

background:"#020617",

padding:"30px",

borderRadius:"12px",

marginTop:"30px"

}

const grid={

display:"flex",

gap:"50px"

}
