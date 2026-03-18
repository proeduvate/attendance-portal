import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import {
PieChart,
Pie,
Cell,
Tooltip,
Legend
} from "recharts"

export default function Profile(){

const{id}=useParams()

const[intern,setIntern]=useState({})

const[stats,setStats]=useState({

present:0,
absent:0,
leave:0,
attendance_percent:0,
reliability:0,
risk:"SAFE"

})

useEffect(()=>{

axios.get(
"http://127.0.0.1:8000/intern/"+id
).then(res=>{

setIntern(res.data)

})

axios.get(
"http://127.0.0.1:8000/intern_stats/"+id
).then(res=>{

setStats(res.data)

})

},[id])


const data=[

{ name:"Present", value:stats.present },

{ name:"Absent", value:stats.absent },

{ name:"Leave", value:stats.leave }

]

const COLORS=[

"#22c55e",
"#ef4444",
"#f59e0b"

]


const getRiskColor=()=>{

if(stats.risk==="SAFE")
return "#22c55e"

if(stats.risk==="WARNING")
return "#f59e0b"

return "#ef4444"

}


const exportPDF=()=>{

window.open(

"http://127.0.0.1:8000/export/"+id

)

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

Intern Profile

</h1>


<div style={profileCard}>

<h2>

{intern.name}

</h2>

<p>

ID : {intern.intern_id}

</p>

<p>

Department : {intern.department}

</p>

<button
onClick={exportPDF}
style={btn}
>

Export Report

</button>

</div>


<div style={grid}>

<div style={statGreen}>

Present : {stats.present}

</div>

<div style={statRed}>

Absent : {stats.absent}

</div>

<div style={statYellow}>

Leave : {stats.leave}

</div>

<div style={statPurple}>

Attendance % : {stats.attendance_percent}%

</div>

</div>


<div style={analyticsBox}>

<h2>

Attendance Analytics

</h2>

<PieChart width={350} height={300}>

<Pie

data={data}

cx="50%"

cy="50%"

outerRadius={110}

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

</div>


<div style={scoreBox}>

<h2>

Reliability Score

</h2>

<h1>

{stats.reliability}

</h1>

<div style={{

background:getRiskColor(),

padding:"12px",

borderRadius:"8px",

width:"160px",

textAlign:"center",

marginTop:"10px"

}}>

{stats.risk}

</div>

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

const profileCard={

background:"#020617",

padding:"25px",

borderRadius:"10px",

marginBottom:"25px"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px",

marginBottom:"25px"

}

const statGreen={

background:"#15803d",

padding:"20px",

borderRadius:"10px"

}

const statRed={

background:"#7f1d1d",

padding:"20px",

borderRadius:"10px"

}

const statYellow={

background:"#78350f",

padding:"20px",

borderRadius:"10px"

}

const statPurple={

background:"#312e81",

padding:"20px",

borderRadius:"10px"

}

const analyticsBox={

background:"#020617",

padding:"25px",

borderRadius:"10px",

width:"400px",

marginBottom:"25px"

}

const scoreBox={

background:"#1e293b",

padding:"30px",

borderRadius:"10px"

}

const btn={

marginTop:"15px",

padding:"10px",

background:"#6366f1",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"6px"

}
