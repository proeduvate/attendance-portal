import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import {motion} from "framer-motion"
import {warn} from "../components/Notify"

export default function Patterns(){

const[data,setData]=useState([])

useEffect(()=>{

axios.get(

"http://127.0.0.1:8000/patterns"

)

.then(res=>{

setData(res.data)

if(res.data.length>0){

warn("Risk interns detected")

}

})

},[])


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1>

Attendance Risk Patterns

</h1>

<div style={grid}>

{

data.map((p,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.4}}

whileHover={{scale:1.05}}

style={card}

>

<h3>

{p.name}

</h3>

<p>

Intern ID : {p.intern_id}

</p>

<p>

Absences : {p.absent_count}

</p>

<p style={risk}>

Status : High Risk

</p>

</motion.div>

))

}

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

const grid={

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px",

marginTop:"30px"

}

const card={

background:"linear-gradient(135deg,#ef4444,#7f1d1d)",

padding:"25px",

borderRadius:"12px",

boxShadow:"0px 0px 15px black"

}

const risk={

marginTop:"10px",

fontWeight:"bold"
}
