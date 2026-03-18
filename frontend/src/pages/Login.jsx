import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const navigate=useNavigate()

const login=async()=>{

try{

let res=await axios.post(

"http://127.0.0.1:8000/login",

{

email,
password

})

localStorage.setItem("token",res.data.access_token)

navigate("/dashboard")

}catch{

alert("Login Failed")

}

}

return(

<div style={container}>

<div style={card}>

<img

src="/logo.png"

alt="logo"

style={logo}

/>

<h1 style={title}>

PROEDUVATE

</h1>

<p style={subtitle}>

Smart Intern Attendance System

</p>

<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

style={input}

/>

<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

style={input}

/>

<button

onClick={login}

style={button}

>

Login

</button>

</div>

</div>

)

}


const container={

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"linear-gradient(135deg,#020617,#0f172a)"

}

const card={

background:"rgba(2,6,23,0.9)",

padding:"45px",

borderRadius:"15px",

width:"360px",

boxShadow:"0px 0px 30px black",

textAlign:"center",

backdropFilter:"blur(12px)"

}

const logo={

width:"80px",

marginBottom:"15px"

}

const title={

color:"#FFD700",

marginBottom:"5px"

}

const subtitle={

color:"#94a3b8",

marginBottom:"25px"

}

const input={

width:"100%",

padding:"12px",

marginBottom:"15px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

borderRadius:"6px"

}

const button={

width:"100%",

padding:"12px",

background:"linear-gradient(90deg,#4f46e5,#9333ea)",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"6px"
}
