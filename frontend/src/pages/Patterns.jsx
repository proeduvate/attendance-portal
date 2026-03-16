import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

export default function Patterns(){

const[data,setData]=useState([])

useEffect(()=>{

axios.get(
"http://127.0.0.1:8000/patterns"
)

.then(res=>{

setData(res.data)

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Attendance Patterns

</h1>

<div style={grid}>

{

data.map((p,index)=>(

<div key={index} style={card}>

<h3>

{p.name}

</h3>

<p>

Absences : {p.absent_count}

</p>

<p>

Status : Risk

</p>

</div>

))

}

</div>

</div>

</div>

)

}

const container={

marginLeft:"260px",

padding:"40px",

background:"#0D1117",

height:"100vh",

color:"white",

width:"100%"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px",

marginTop:"30px"

}

const card={

background:"linear-gradient(135deg,#ef4444,#7f1d1d)",

padding:"20px",

borderRadius:"10px",

boxShadow:"0px 0px 10px black"

}
