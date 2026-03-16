import {motion} from "framer-motion"

export default function Loader(){

return(

<div style={wrap}>

<motion.div

animate={{

rotate:360

}}

transition={{

repeat:Infinity,

duration:1

}}

style={circle}

/>

</div>

)

}

const wrap={

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"#0D1117"

}

const circle={

width:"60px",

height:"60px",

border:"6px solid #6366f1",

borderTop:"6px solid transparent",

borderRadius:"50%"

}
