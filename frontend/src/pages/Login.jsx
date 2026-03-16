import {useState} from "react"
import axios from "axios"

export default function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const login=async()=>{

try{

let r=await axios.post(
"http://127.0.0.1:8000/login",
{
email,
password
}
)

localStorage.setItem("token",r.data.token)

window.location="/dashboard"

}catch{

alert("Login Failed")

}

}

return(

<div style={{

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"linear-gradient(135deg,#0D1117,#1f2937)"

}}>

<div style={{

background:"#161B22",

padding:"40px",

borderRadius:"10px",

width:"350px",

boxShadow:"0px 0px 20px black"

}}>

<h2 style={{

textAlign:"center",

marginBottom:"20px"

}}>

Smart Intern Attendance System

</h2>

<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

style={{

width:"100%",

padding:"10px",

marginBottom:"15px",

background:"#0D1117",

color:"white",

border:"none"

}}

/>

<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

style={{

width:"100%",

padding:"10px",

marginBottom:"20px",

background:"#0D1117",

color:"white",

border:"none"

}}

/>

<button

onClick={login}

style={{

width:"100%",

padding:"12px",

background:"linear-gradient(90deg,#4f46e5,#9333ea)",

border:"none",

color:"white",

cursor:"pointer"

}}>

Login

</button>

</div>

</div>

)

}
