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

)

.then(res=>{

setStats(res.data)

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

Dashboard Overview

</h1>


<h2 style={section}>

Today

</h2>

<div style={grid}>

<div style={green}>

Present

<h2>

{stats.today.present}

</h2>

</div>

<div style={red}>

Absent

<h2>

{stats.today.absent}

</h2>

</div>

<div style={yellow}>

Leave

<h2>

{stats.today.leave}

</h2>

</div>

</div>


<h2 style={section}>

Yesterday

</h2>

<div style={grid}>

<div style={green}>

{stats.yesterday.present}

</div>

<div style={red}>

{stats.yesterday.absent}

</div>

<div style={yellow}>

{stats.yesterday.leave}

</div>

</div>


<h2 style={section}>

Last 7 Days

</h2>

<div style={grid}>

<div style={green}>

{stats.week.present}

</div>

<div style={red}>

{stats.week.absent}

</div>

<div style={yellow}>

{stats.week.leave}

</div>

</div>


<h2 style={section}>

Last 30 Days

</h2>

<div style={grid}>

<div style={green}>

{stats.month.present}

</div>

<div style={red}>

{stats.month.absent}

</div>

<div style={yellow}>

{stats.month.leave}

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

const section={

marginTop:"30px"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px",

marginBottom:"20px"

}

const green={

background:"#15803d",

padding:"25px",

borderRadius:"10px"

}

const red={

background:"#7f1d1d",

padding:"25px",

borderRadius:"10px"

}

const yellow={

background:"#78350f",

padding:"25px",

borderRadius:"10px"

}
