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

let record=data.find(x=>x.date===d)

return record

}


const getColor=(date)=>{

let record=getStatus(date)

if(!record) return ""

if(record.status==="PRESENT")
return "present"

if(record.status==="ABSENT")
return "absent"

if(record.status==="COMPANY_LEAVE")
return "leave"

}


const onClickDay=(date)=>{

let record=getStatus(date)

setSelected(record)

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

Attendance Calendar

</h1>

<input

placeholder="Enter Intern ID"

onChange={(e)=>setIntern(e.target.value)}

style={input}

/>

<div style={calendarBox}>

<Calendar

tileClassName={({date})=>getColor(date)}

onClickDay={onClickDay}

/>

</div>


{

selected && (

<div style={detailBox}>

<h2>

Day Details

</h2>

<p>

Date :

{selected.date}

</p>

<p>

Status :

{selected.status}

</p>

<p>

Reason :

{selected.reason || "No reason"}

</p>

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

const input={

padding:"12px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

borderRadius:"6px",

width:"250px",

marginBottom:"20px"

}

const calendarBox={

background:"#020617",

padding:"25px",

borderRadius:"10px",

width:"650px",

boxShadow:"0px 0px 20px black"

}

const detailBox={

marginTop:"25px",

background:"#020617",

padding:"25px",

borderRadius:"10px",

width:"400px"

}
