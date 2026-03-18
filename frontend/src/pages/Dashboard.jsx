import {useEffect,useState} from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
Legend

} from "recharts"

export default function Dashboard(){

const[trend,setTrend]=useState([])

useEffect(()=>{

axios.get(

"http://127.0.0.1:8000/attendance_trend"

)

.then(res=>{

setTrend(res.data)

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={title}>
Attendance Analytics
</h1>


<div style={chartCard}>

<h2>
Attendance Trend
</h2>

<LineChart

width={900}

height={400}

data={trend}

>

<CartesianGrid stroke="#1e293b"/>

<XAxis dataKey="date"/>

<YAxis/>

<Tooltip/>

<Legend/>

<Line

type="monotone"

dataKey="present"

stroke="#22c55e"

strokeWidth={3}

/>

<Line

type="monotone"

dataKey="absent"

stroke="#ef4444"

strokeWidth={3}

/>

</LineChart>

</div>

</div>

</div>

)

}


const main={

marginLeft:"260px",

width:"100%",

background:"#0D1117",

minHeight:"100vh",

color:"white",

padding:"30px"

}

const title={
color:"#FFD700"
}

const chartCard={

background:"rgba(15,23,42,0.8)",

padding:"30px",

borderRadius:"15px",

backdropFilter:"blur(10px)",

boxShadow:"0px 0px 30px black"

}
