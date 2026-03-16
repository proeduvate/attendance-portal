import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
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

<motion.div
style={card}
whileHover={{scale:1.06}}
>

<h2>42</h2>

<p>Present Today</p>

</motion.div>

<motion.div
style={cardRed}
whileHover={{scale:1.06}}
>

<h2>5</h2>

<p>Absent</p>

</motion.div>

<motion.div
style={cardYellow}
whileHover={{scale:1.06}}
>

<h2>3</h2>

<p>Leave</p>

</motion.div>

<motion.div
style={cardPurple}
whileHover={{scale:1.06}}
>

<h2>2</h2>

<p>Risk Interns</p>

</motion.div>

</div>

</div>

</div>

)

}

const main={

marginLeft:"250px",

width:"100%",

background:"#0D1117",

minHeight:"100vh",

color:"white"

}

const grid={

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"25px",

padding:"30px"

}

const card={

background:"linear-gradient(135deg,#22c55e,#15803d)",

padding:"30px",

borderRadius:"12px"

}

const cardRed={

background:"linear-gradient(135deg,#ef4444,#7f1d1d)",

padding:"30px",

borderRadius:"12px"

}

const cardYellow={

background:"linear-gradient(135deg,#f59e0b,#78350f)",

padding:"30px",

borderRadius:"12px"

}

const cardPurple={

background:"linear-gradient(135deg,#6366f1,#312e81)",

padding:"30px",

borderRadius:"12px"

}
