import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Analytics from "../components/Analytics"
import {motion} from "framer-motion"

export default function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

<h1 style={{marginTop:"20px"}}>

Dashboard Overview

</h1>

<div style={grid}>

<motion.div style={cardGreen} whileHover={{scale:1.05}}>

<h2>42</h2>

<p>Present</p>

</motion.div>

<motion.div style={cardRed} whileHover={{scale:1.05}}>

<h2>5</h2>

<p>Absent</p>

</motion.div>

<motion.div style={cardYellow} whileHover={{scale:1.05}}>

<h2>3</h2>

<p>Leave</p>

</motion.div>

<motion.div style={cardPurple} whileHover={{scale:1.05}}>

<h2>2</h2>

<p>Risk</p>

</motion.div>

</div>

<Analytics/>

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

padding:"20px"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px"

}

const cardGreen={

background:"linear-gradient(135deg,#22c55e,#15803d)",

padding:"25px",

borderRadius:"10px"

}

const cardRed={

background:"linear-gradient(135deg,#ef4444,#7f1d1d)",

padding:"25px",

borderRadius:"10px"

}

const cardYellow={

background:"linear-gradient(135deg,#f59e0b,#78350f)",

padding:"25px",

borderRadius:"10px"

}

const cardPurple={

background:"linear-gradient(135deg,#6366f1,#312e81)",

padding:"25px",

borderRadius:"10px"

}
