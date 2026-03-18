import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion"

export default function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[show,setShow]=useState(false)

const navigate=useNavigate()

const login=async()=>{

try{

let res=await axios.post(

"http://127.0.0.1:8000/login",

{

email,
password

})

localStorage.setItem(

"token",

res.data.access_token

)

navigate("/dashboard")

}catch{

alert("Invalid Credentials")

}

}


return(

<div style={container}>

<motion.div

style={card}

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:.6}}

>

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


<div style={inputBox}>

<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

style={input}

/>

</div>


<div style={inputBox}>

<input

type={show?"text":"password"}

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

style={input}

/>

<span

onClick={()=>setShow(!show)}

style={eye}

>

{show?"Hide":"Show"}

</span>

</div>


<motion.button

onClick={login}

style={button}

whileHover={{scale:1.05}}

whileTap={{scale:.95}}

>

Login

</motion.button>


</motion.div>

</div>

)

}


const container={

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:

"linear-gradient(135deg,#020617,#0f172a,#020617)",

backgroundSize:"400% 400%",

animation:"bgMove 15s infinite"

}

const card={

background:"rgba(2,6,23,0.85)",

padding:"45px",

borderRadius:"18px",

width:"360px",

textAlign:"center",

backdropFilter:"blur(15px)",

boxShadow:

"0px 0px 40px rgba(0,0,0,.8)",

border:

"1px solid rgba(255,255,255,.05)"

}

const logo={

width:"85px",

marginBottom:"15px",

animation:"float 4s infinite"

}

const title={

color:"#FFD700",

marginBottom:"5px"

}

const subtitle={

color:"#94a3b8",

marginBottom:"25px"

}

const inputBox={

position:"relative",

marginBottom:"15px"

}

const input={

width:"100%",

padding:"13px",

background:"#020617",

border:"1px solid #1e293b",

color:"white",

borderRadius:"8px",

outline:"none"

}

const eye={

position:"absolute",

right:"12px",

top:"12px",

cursor:"pointer",

fontSize:"12px",

color:"#94a3b8"

}

const button={

width:"100%",

padding:"13px",

marginTop:"10px",

background:

"linear-gradient(90deg,#4f46e5,#9333ea)",

border:"none",

color:"white",

cursor:"pointer",

borderRadius:"8px",

fontWeight:"bold"

}
