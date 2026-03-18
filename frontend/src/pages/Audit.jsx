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
Audit Logs
</h1>

<div style={card}>

<table style={table}>

<thead>

<tr>

<th>User</th>

<th>Action</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{

data.length===0?

<tr>

<td colSpan="3">

No Logs Found

</td>

</tr>

:

data.map((a,i)=>(

<tr key={i}>

<td>{a.user}</td>

<td>{a.action}</td>

<td>{a.date}</td>

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
color:"#FFD700"
}

const card={

background:"#020617",

padding:"25px",

borderRadius:"10px"

}

const table={

width:"100%",

borderCollapse:"collapse"
}
