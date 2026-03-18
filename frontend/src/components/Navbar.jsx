import {motion} from "framer-motion"
import {FaBell} from "react-icons/fa"

export default function Navbar(){

return(

<div style={nav}>

<h2 style={title}>
HR Dashboard
</h2>

<div style={right}>

<motion.div style={bell} whileHover={{scale:1.2}}>
<FaBell/>
</motion.div>

<div style={profile}>
HR Admin
</div>

</div>

</div>

)

}

const nav={

marginLeft:"260px",

height:"70px",

background:"#020617",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"0 30px",

borderBottom:"1px solid #1e293b"

}

const title={
color:"#FFD700"
}

const right={

display:"flex",

gap:"20px"

}

const bell={

background:"#0f172a",

padding:"10px",

borderRadius:"6px"

}

const profile={

background:"#0f172a",

padding:"10px",

borderRadius:"6px"

}
