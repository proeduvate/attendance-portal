import {useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

export default function Upload(){

const[file,setFile]=useState(null)

const upload=async()=>{

if(!file){

alert("Select file")

return

}

let form=new FormData()

form.append("file",file)

await axios.post(

"http://127.0.0.1:8000/upload_attendance",

form,

{

headers:{
"Content-Type":"multipart/form-data"
}

}

)

alert("Attendance Uploaded")

}

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={container}>

<h1>

Upload Attendance

</h1>

<div style={uploadBox}>

<h3>

Upload TXT File

</h3>

<input

type="file"

onChange={(e)=>setFile(e.target.files[0])}

style={input}

/>

<button

onClick={upload}

style={button}

>

Upload

</button>

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

const uploadBox={

background:"#020617",

padding:"40px",

width:"400px",

borderRadius:"10px",

marginTop:"30px"

}

const input={

marginTop:"20px",

marginBottom:"20px",

color:"white"

}

const button={

padding:"12px",

background:"linear-gradient(90deg,#4f46e5,#9333ea)",

border:"none",

color:"white",

cursor:"pointer",

width:"100%"

}
