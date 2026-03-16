import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"

export default function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Dashboard

</h1>

<div style={grid}>

<motion.div
style={cardGreen}
whileHover={{scale:1.08}}
initial={{opacity:0}}
animate={{opacity:1}}
>

Present

</motion.div>

<motion.div
style={cardRed}
whileHover={{scale:1.08}}
initial={{opacity:0}}
animate={{opacity:1}}
>

Absent

</motion.div>

<motion.div
style={cardYellow}
whileHover={{scale:1.08}}
initial={{opacity:0}}
animate={{opacity:1}}
>

Leave

</motion.div>

<motion.div
style={cardPurple}
whileHover={{scale:1.08}}
initial={{opacity:0}}
animate={{opacity:1}}
>

Patterns

</motion.div>

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

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px",

marginTop:"30px"

}

const cardGreen={

background:"linear-gradient(90deg,#22c55e,#4ade80)",

padding:"30px",

borderRadius:"10px",

textAlign:"center",

fontSize:"18px"

}

const cardRed={

background:"linear-gradient(90deg,#ef4444,#f87171)",

padding:"30px",

borderRadius:"10px",

textAlign:"center",

fontSize:"18px"

}

const cardYellow={

background:"linear-gradient(90deg,#f59e0b,#fbbf24)",

padding:"30px",

borderRadius:"10px",

textAlign:"center",

fontSize:"18px"

}

const cardPurple={

background:"linear-gradient(90deg,#6366f1,#8b5cf6)",

padding:"30px",

borderRadius:"10px",

textAlign:"center",

fontSize:"18px"

}
