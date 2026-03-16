import Sidebar from "../components/Sidebar"

export default function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{

marginLeft:"260px",

background:"#0D1117",

height:"100vh",

color:"white",

padding:"40px",

width:"100%"

}}>

<h1>

Dashboard

</h1>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px",

marginTop:"30px"

}}>

<div style={cardGreen}>Present</div>

<div style={cardRed}>Absent</div>

<div style={cardYellow}>Leave</div>

<div style={cardPurple}>Patterns</div>

</div>

</div>

</div>

)

}

const cardGreen={
background:"linear-gradient(90deg,#22c55e,#4ade80)",
padding:"20px",
borderRadius:"10px"
}

const cardRed={
background:"linear-gradient(90deg,#ef4444,#f87171)",
padding:"20px",
borderRadius:"10px"
}

const cardYellow={
background:"linear-gradient(90deg,#f59e0b,#fbbf24)",
padding:"20px",
borderRadius:"10px"
}

const cardPurple={
background:"linear-gradient(90deg,#6366f1,#8b5cf6)",
padding:"20px",
borderRadius:"10px"
}
