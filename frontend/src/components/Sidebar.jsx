import { Link } from "react-router-dom"
import {motion} from "framer-motion"

export default function Sidebar(){

return(

<div style={sidebar}>

<h2 style={title}>

Attendance Portal

</h2>

<Link to="/dashboard" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Dashboard

</motion.div>

</Link>

<Link to="/interns" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Interns

</motion.div>

</Link>

<Link to="/upload" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Upload Attendance

</motion.div>

</Link>

<Link to="/calendar" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Calendar

</motion.div>

</Link>

<Link to="/patterns" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Patterns

</motion.div>

</Link>

<Link to="/audit" style={link}>

<motion.div
style={menu}
whileHover={{scale:1.05,background:"#1e293b"}}
>

Audit Logs

</motion.div>

</Link>

</div>

)

}

const sidebar={

width:"250px",

height:"100vh",

background:"#020617",

color:"white",

padding:"20px",

position:"fixed"

}

const title={

marginBottom:"40px",

color:"#8b5cf6"

}

const menu={

padding:"12px",

marginBottom:"15px",

background:"#0f172a",

borderRadius:"6px",

cursor:"pointer"

}

const link={

textDecoration:"none",

color:"white"
}
