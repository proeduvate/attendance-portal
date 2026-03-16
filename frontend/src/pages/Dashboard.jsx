export default function Dashboard(){

return(

<div style={{

background:"#0D1117",

height:"100vh",

color:"white",

padding:"40px"

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

<div style={{

background:"linear-gradient(90deg,#22c55e,#4ade80)",

padding:"20px",

borderRadius:"10px"

}}>

Present

</div>

<div style={{

background:"linear-gradient(90deg,#ef4444,#f87171)",

padding:"20px",

borderRadius:"10px"

}}>

Absent

</div>

<div style={{

background:"linear-gradient(90deg,#f59e0b,#fbbf24)",

padding:"20px",

borderRadius:"10px"

}}>

Leave

</div>

<div style={{

background:"linear-gradient(90deg,#6366f1,#8b5cf6)",

padding:"20px",

borderRadius:"10px"

}}>

Patterns

</div>

</div>

</div>

)

}
