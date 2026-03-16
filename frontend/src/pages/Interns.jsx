import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

export default function Interns(){

const[interns,setInterns]=useState([])

const[name,setName]=useState("")
const[dept,setDept]=useState("")
const[id,setId]=useState("")

useEffect(()=>{

fetchInterns()

},[])

const fetchInterns=async()=>{

let res=await axios.get(
"http://127.0.0.1:8000/interns"
)

setInterns(res.data)

}

const addIntern=async()=>{

await axios.post(
"http://127.0.0.1:8000/add_intern",
{

intern_id:id,

name:name,

department:dept,

email:"test@test.com",

phone:"999999",

mentor:"HR"

}
)

fetchInterns()

}

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Intern Management

</h1>

<div style={formBox}>

<input
placeholder="Intern ID"
onChange={(e)=>setId(e.target.value)}
style={input}
/>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
style={input}
/>

<input
placeholder="Department"
onChange={(e)=>setDept(e.target.value)}
style={input}
/>

<button
onClick={addIntern}
style={button}
>

Add Intern

</button>

</div>

<table style={table}>

<tr>

<th>ID</th>

<th>Name</th>

<th>Department</th>

</tr>

{

interns.map((i,index)=>(

<tr key={index}>

<td>{i.intern_id}</td>

<td>{i.name}</td>

<td>{i.department}</td>

</tr>

))

}

</table>

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

const formBox={

marginTop:"20px",

marginBottom:"30px"

}

const input={

padding:"10px",

marginRight:"10px",

background:"#020617",

border:"none",

color:"white"

}

const button={

padding:"10px",

background:"#6366f1",

border:"none",

color:"white",

cursor:"pointer"

}

const table={

width:"100%",

background:"#020617",

borderRadius:"8px",

padding:"20px"

}
