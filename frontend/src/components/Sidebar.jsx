import { Link } from "react-router-dom"

export default function Sidebar(){

return(

<div style={{

width:"250px",

height:"100vh",

background:"#020617",

color:"white",

padding:"20px",

position:"fixed"

}}>

<h2 style={{

marginBottom:"40px",

color:"#8b5cf6"

}}>

Attendance Portal

</h2>

<Link to="/dashboard" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Dashboard

</div>

</Link>

<Link to="/interns" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Interns

</div>

</Link>

<Link to="/upload" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Upload Attendance

</div>

</Link>

<Link to="/calendar" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Calendar

</div>

</Link>

<Link to="/patterns" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Patterns

</div>

</Link>

<Link to="/audit" style={{textDecoration:"none"}}>

<div style={menuStyle}>

Audit Logs

</div>

</Link>

</div>

)

}

const menuStyle={

padding:"12px",

marginBottom:"15px",

background:"#0f172a",

borderRadius:"6px",

cursor:"pointer"

}
