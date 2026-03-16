import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Profile(){

const{id}=useParams()

const[intern,setIntern]=useState({})
const[stats,setStats]=useState({})

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

<h1>Intern Profile</h1>

<div style={card}>

<h2>{intern.name}</h2>

<p>ID : {intern.intern_id}</p>

<p>Department : {intern.department}</p>

<button
onClick={exportPDF}
style={btn}
>

Export Report PDF

</button>

</div>

</div>

</div>

)

}

const main={

marginLeft:"250px",
width:"100%",
background:"#0D1117",
minHeight:"100vh",
color:"white",
padding:"30px"

}

const card={

background:"#020617",
padding:"25px",
borderRadius:"10px"

}

const btn={

marginTop:"20px",
padding:"10px",
background:"#6366f1",
border:"none",
color:"white",
cursor:"pointer",
borderRadius:"6px"

}
