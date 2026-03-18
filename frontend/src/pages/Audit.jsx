import {useEffect,useState} from "react"
import axios from "axios"

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Audit(){

const[data,setData]=useState([])

useEffect(()=>{

axios.get(

"http://127.0.0.1:8000/audit"

)

.then(res=>{

setData(res.data)

})

.catch(()=>{

setData([])

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={title}>
Audit Timeline
</h1>


<div style={timelineCard}>

{

data.length===0?

<div style={empty}>

No Activity Yet

</div>

:

data.map((log,index)=>(

<div key={index} style={item}>

<div style={dot}/>

<div style={content}>

<h3>

{log.action}

</h3>

<p>

User : {log.user}

</p>

<p style={date}>

{log.date}

</p>

</div>

</div>

))

}

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

color:"#FFD700",

marginBottom:"30px"

}

const timelineCard={

background:"rgba(15,23,42,0.8)",

padding:"30px",

borderRadius:"15px",

backdropFilter:"blur(10px)",

boxShadow:"0px 0px 25px black"

}

const item={

display:"flex",

gap:"20px",

marginBottom:"25px",

borderLeft:"2px solid #1e293b",

paddingLeft:"20px"

}

const dot={

width:"15px",

height:"15px",

background:"#6366f1",

borderRadius:"50%",

marginTop:"8px"

}

const content={

background:"#020617",

padding:"15px",

borderRadius:"8px",

width:"400px"

}

const date={

color:"#94a3b8",

fontSize:"13px"

}

const empty={

textAlign:"center",

padding:"30px",

color:"#94a3b8"
}
