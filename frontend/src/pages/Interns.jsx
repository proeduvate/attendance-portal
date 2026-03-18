import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"

export default function Interns(){

const[interns,setInterns]=useState([])
const[filtered,setFiltered]=useState([])

const[search,setSearch]=useState("")
const[deptFilter,setDeptFilter]=useState("")

const[name,setName]=useState("")
const[dept,setDept]=useState("")
const[id,setId]=useState("")


useEffect(()=>{

fetchInterns()

},[])


useEffect(()=>{

let data=interns

if(search){

data=data.filter(i=>

i.name.toLowerCase().includes(search.toLowerCase())

)

}

if(deptFilter){

data=data.filter(i=>

i.department===deptFilter

)

}

setFiltered(data)

},[search,deptFilter,interns])


const fetchInterns=async()=>{

try{

let res=await axios.get(

"http://127.0.0.1:8000/interns"

)

setInterns(res.data)

setFiltered(res.data)

}catch{

setInterns([])

setFiltered([])

}

}


const addIntern=async()=>{

try{

await axios.post(

"http://127.0.0.1:8000/add_intern",

{

intern_id:id,

name:name,

department:dept,

email:"hr@test.com",

phone:"999999",

mentor:"HR"

}

)

fetchInterns()

}catch{

alert("Failed to add intern")

}

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={title}>
Intern Management
</h1>


<div style={topBar}>

<input

placeholder="Search Intern"

onChange={(e)=>setSearch(e.target.value)}

style={input}

/>

<select

onChange={(e)=>setDeptFilter(e.target.value)}

style={input}

>

<option value="">
All Departments
</option>

<option value="AI">
AI
</option>

<option value="Cloud">
Cloud
</option>

<option value="Web">
Web
</option>

<option value="Product">
Product
</option>

</select>

</div>


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


<div style={tableCard}>

<table style={table}>

<thead>

<tr style={thead}>

<th>ID</th>

<th>Name</th>

<th>Department</th>

</tr>

</thead>

<tbody>

{

filtered.length===0?

<tr>

<td colSpan="3" style={empty}>
No interns found
</td>

</tr>

:

filtered.map((i,index)=>(

<tr key={index} style={row}>

<td style={cell}>
{i.intern_id}
</td>

<td style={cell}>

<Link

to={"/profile/"+i.intern_id}

style={nameLink}

>

{i.name}

</Link>

</td>

<td style={cell}>
{i.department}
</td>

</tr>

))

}

</tbody>

</table>

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

marginBottom:"20px"

}

const topBar={

display:"flex",

gap:"20px",

marginBottom:"25px"

}

const formBox={

display:"flex",

gap:"15px",

marginBottom:"25px"

}

const input={

padding:"12px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

borderRadius:"6px",

width:"200px"

}

const button={

padding:"12px",

background:"linear-gradient(90deg,#4f46e5,#9333ea)",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"6px"

}

const tableCard={

background:"#020617",

borderRadius:"10px",

padding:"20px",

boxShadow:"0px 0px 20px black"

}

const table={

width:"100%",

borderCollapse:"collapse"

}

const thead={

background:"#0f172a",

textAlign:"left"

}

const row={

borderBottom:"1px solid #1e293b"

}

const cell={

padding:"15px"

}

const empty={

padding:"20px",

textAlign:"center",

color:"#94a3b8"

}

const nameLink={

color:"#8b5cf6",

textDecoration:"none",

fontWeight:"500"
}
