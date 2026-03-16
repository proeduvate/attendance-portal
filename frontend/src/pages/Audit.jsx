import {useEffect,useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"

export default function Audit(){

const[data,setData]=useState([])

useEffect(()=>{

axios.get(
"http://127.0.0.1:8000/audit"
)

.then(res=>{

setData(res.data)

})

},[])

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Audit Logs

</h1>

<div style={grid}>

{

data.map((a,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.4}}

whileHover={{scale:1.05}}

style={card}

>

<h3>

{a.action}

</h3>

<p>

User : {a.user}

</p>

<p>

Date : {a.date}

</p>

</motion.div>

))

}

</div>

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

const grid={

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px",

marginTop:"30px"

}

const card={

background:"linear-gradient(135deg,#6366f1,#1e3a8a)",

padding:"20px",

borderRadius:"10px",

boxShadow:"0px 0px 15px black"

}
