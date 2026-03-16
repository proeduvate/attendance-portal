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

let res=await axios.get(

"http://127.0.0.1:8000/interns"

)

setInterns(res.data)

setFiltered(res.data)

}


const addIntern=async()=>{

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

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

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


<table style={table}>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Department</th>

</tr>

</thead>

<tbody>

{

filtered.map((i,index)=>(

<tr key={index} style={row}>

<td>{i.intern_id}</td>

<td>

<Link

to={"/profile/"+i.intern_id}

style={{

color:"#8b5cf6",

textDecoration:"none"

}}

>

{i.name}

</Link>

</td>

<td>{i.department}</td>

</tr>

))

}

</tbody>

</table>

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

const topBar={

display:"flex",

gap:"20px",

marginBottom:"20px"

}

const formBox={

marginBottom:"30px"

}

const input={

padding:"10px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

marginRight:"10px"

}

const button={

padding:"10px",

background:"#6366f1",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"6px"

}

const table={

width:"100%",

background:"#020617",

borderRadius:"10px",

padding:"20px",

borderCollapse:"collapse"

}

const row={

borderBottom:"1px solid #1e293b"
}
