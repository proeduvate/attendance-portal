import { Link } from "react-router-dom"
import {motion} from "framer-motion"

export default function Sidebar(){

return(

<div style={sidebar}>

<h2 style={title}>
PROEDUVATE
</h2>

<Link to="/dashboard" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Dashboard

</motion.div>

</Link>

<Link to="/interns" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Interns

</motion.div>

</Link>

<Link to="/upload" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Upload

</motion.div>

</Link>

<Link to="/calendar" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Calendar

</motion.div>

</Link>

<Link to="/patterns" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Patterns

</motion.div>

</Link>

<Link to="/audit" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05}}
>

Audit Logs

</motion.div>

</Link>

</div>

)

}

const sidebar={

width:"260px",

height:"100vh",

position:"fixed",

left:0,

top:0,

background:"rgba(2,6,23,0.85)",

backdropFilter:"blur(10px)",

borderRight:"1px solid #1e293b",

padding:"25px",

zIndex:1000

}

const title={

color:"#FFD700",

marginBottom:"40px",

fontWeight:"bold"

}

const menu={

padding:"14px",

marginBottom:"15px",

background:"rgba(15,23,42,0.7)",

borderRadius:"8px",

cursor:"pointer",

transition:"0.3s"

}

const link={

textDecoration:"none",

color:"white"
}
