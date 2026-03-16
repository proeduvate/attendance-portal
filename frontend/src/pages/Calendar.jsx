import {useState,useEffect} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Calendar from "react-calendar"

import "react-calendar/dist/Calendar.css"

export default function InternCalendar(){

const[intern,setIntern]=useState("")
const[data,setData]=useState([])

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


const getColor=(date)=>{

let d=date.toISOString().slice(0,10)

let record=data.find(x=>x.date===d)

if(!record) return ""

if(record.status==="PRESENT")

return "present"

if(record.status==="ABSENT")

return "absent"

if(record.status==="COMPANY_LEAVE")

return "leave"

}


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Attendance Calendar

</h1>

<input

placeholder="Enter Intern ID"

onChange={(e)=>setIntern(e.target.value)}

style={input}

/>

<Calendar

tileClassName={({date})=>getColor(date)}

/>

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

const input={

padding:"10px",

marginBottom:"20px",

background:"#020617",

border:"none",

color:"white"

}
