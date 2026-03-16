import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function Profile(){

const{id}=useParams()

const[intern,setIntern]=useState({})

const[stats,setStats]=useState({

present:0,
absent:0,
leave:0

})

useEffect(()=>{

axios.get(

"http://127.0.0.1:8000/intern/"+id

)

.then(res=>{

setIntern(res.data)

})


axios.get(

"http://127.0.0.1:8000/intern_stats/"+id

)

.then(res=>{

setStats(res.data)

})

},[id])


let total=

stats.present+

stats.absent+

stats.leave


let percent=

total?

Math.round(

(stats.present/total)*100

):0


let reliability=

100-(stats.absent*10)


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

Intern Profile

</h1>


<div style={card}>

<h2>

{intern.name}

</h2>

<p>

ID : {intern.intern_id}

</p>

<p>

Department : {intern.department}

</p>

</div>


<div style={grid}>

<div style={statGreen}>

Present : {stats.present}

</div>

<div style={statRed}>

Absent : {stats.absent}

</div>

<div style={statYellow}>

Leave : {stats.leave}

</div>

<div style={statPurple}>

Attendance % : {percent}%

</div>

</div>


<div style={score}>

Reliability Score : {reliability}

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

borderRadius:"10px",

marginBottom:"20px"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px"

}

const statGreen={

background:"#15803d",

padding:"20px",

borderRadius:"10px"

}

const statRed={

background:"#7f1d1d",

padding:"20px",

borderRadius:"10px"

}

const statYellow={

background:"#78350f",

padding:"20px",

borderRadius:"10px"

}

const statPurple={

background:"#312e81",

padding:"20px",

borderRadius:"10px"

}

const score={

marginTop:"30px",

background:"#1e293b",

padding:"25px",

borderRadius:"10px",

fontSize:"20px"
}
