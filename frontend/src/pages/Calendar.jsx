import {useState,useEffect} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Calendar from "react-calendar"

import "react-calendar/dist/Calendar.css"

export default function InternCalendar(){

const[intern,setIntern]=useState("")
const[data,setData]=useState([])
const[selected,setSelected]=useState(null)

useEffect(()=>{

if(intern){

axios.get(
"http://127.0.0.1:8000/attendance/"+intern
)

.then(res=>{

setData(res.data)

})

}

},[intern])


const getStatus=(date)=>{

let d=date.toISOString().slice(0,10)

return data.find(x=>x.date===d)

}


const getColor=(date)=>{

let r=getStatus(date)

if(!r) return ""

if(r.status==="PRESENT")
return "present"

if(r.status==="ABSENT")
return "absent"

return "leave"

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={title}>
Attendance Calendar
</h1>


<div style={topBar}>

<input

placeholder="Enter Intern ID"

onChange={(e)=>setIntern(e.target.value)}

style={input}

/>


<div style={legend}>

<div style={presentBox}/>
Present

<div style={absentBox}/>
Absent

<div style={leaveBox}/>
Leave

</div>

</div>


<div style={calendarCard}>

<Calendar

tileClassName={({date})=>getColor(date)}

onClickDay={(date)=>{

let r=getStatus(date)

if(r) setSelected(r)

}}

/>

</div>


{

selected && (

<div style={modal}>

<div style={modalCard}>

<h2>
Attendance Detail
</h2>

<p>
Date : {selected.date}
</p>

<p>
Status : {selected.status}
</p>

<p>
Reason : {selected.reason || "Not provided"}
</p>

<button

onClick={()=>setSelected(null)}

style={close}

>

Close

</button>

</div>

</div>

)

}

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

const topBar={

display:"flex",

justifyContent:"space-between",

alignItems:"center",

marginBottom:"25px"

}

const input={

padding:"12px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

borderRadius:"6px",

width:"250px"

}

const legend={

display:"flex",

gap:"15px",

alignItems:"center"

}

const presentBox={

width:"20px",

height:"20px",

background:"#22c55e",

borderRadius:"4px"

}

const absentBox={

width:"20px",

height:"20px",

background:"#ef4444",

borderRadius:"4px"

}

const leaveBox={

width:"20px",

height:"20px",

background:"#f59e0b",

borderRadius:"4px"

}

const calendarCard={

background:"rgba(15,23,42,0.8)",

padding:"40px",

borderRadius:"15px",

backdropFilter:"blur(10px)",

boxShadow:"0px 0px 30px black"

}

const modal={

position:"fixed",

top:0,

left:0,

width:"100%",

height:"100%",

background:"rgba(0,0,0,0.7)",

display:"flex",

justifyContent:"center",

alignItems:"center"

}

const modalCard={

background:"#020617",

padding:"30px",

borderRadius:"12px",

width:"320px"

}

const close={

marginTop:"20px",

padding:"10px",

background:"#ef4444",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"6px"

}
