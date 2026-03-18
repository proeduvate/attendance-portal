import {useEffect,useState} from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Dashboard(){

const[stats,setStats]=useState({

today:{},
yesterday:{},
week:{},
month:{}

})

useEffect(()=>{

axios.get(
"http://127.0.0.1:8000/dashboard_stats"
).then(res=>{

setStats(res.data)

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={title}>
Dashboard Overview
</h1>


<h2 style={section}>Today</h2>

<div style={grid}>

<div style={glassGreen}>

<h3>Present</h3>

<h1>{stats.today.present}</h1>

</div>

<div style={glassRed}>

<h3>Absent</h3>

<h1>{stats.today.absent}</h1>

</div>

<div style={glassYellow}>

<h3>Leave</h3>

<h1>{stats.today.leave}</h1>

</div>

</div>


<h2 style={section}>Last 7 Days</h2>

<div style={grid}>

<div style={glassGreen}>
{stats.week.present}
</div>

<div style={glassRed}>
{stats.week.absent}
</div>

<div style={glassYellow}>
{stats.week.leave}
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

const title={
color:"#FFD700"
}

const section={
marginTop:"30px"
}

const grid={

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"25px",

marginBottom:"25px"

}

const glassBase={

padding:"30px",

borderRadius:"15px",

background:"rgba(15,23,42,0.7)",

backdropFilter:"blur(12px)",

boxShadow:"0px 0px 25px rgba(0,0,0,0.6)",

border:"1px solid rgba(255,255,255,0.05)"

}

const glassGreen={

...glassBase,

borderLeft:"5px solid #22c55e"

}

const glassRed={

...glassBase,

borderLeft:"5px solid #ef4444"

}

const glassYellow={

...glassBase,

borderLeft:"5px solid #f59e0b"

}
