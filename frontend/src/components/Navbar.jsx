import {motion} from "framer-motion"
import {FaBell} from "react-icons/fa"
import {info} from "./Notify"

export default function Navbar(){

const logout=()=>{

localStorage.removeItem("token")

window.location="/"

}

const showAlert=()=>{

info("No new alerts")

}

return(

<div style={nav}>

<h2 style={{color:"#8b5cf6"}}>

HR Dashboard

</h2>

<div style={right}>

<motion.div

whileHover={{scale:1.2}}

onClick={showAlert}

style={bell}

>

<FaBell/>

</motion.div>

<motion.div
whileHover={{scale:1.05}}
style={profile}
>

HR Admin

</motion.div>

<button
onClick={logout}
style={logoutBtn}
>

Logout

</button>

</div>

</div>

)

}

const nav={

height:"70px",

background:"#020617",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"0 30px",

borderBottom:"1px solid #1e293b"

}

const right={

display:"flex",

alignItems:"center",

gap:"20px"

}

const bell={

background:"#0f172a",

padding:"10px",

borderRadius:"6px",

cursor:"pointer"

}

const profile={

background:"#0f172a",

padding:"10px",

borderRadius:"6px"

}

const logoutBtn={

background:"#ef4444",

border:"none",

color:"white",

padding:"8px 15px",

cursor:"pointer",

borderRadius:"6px"

}
