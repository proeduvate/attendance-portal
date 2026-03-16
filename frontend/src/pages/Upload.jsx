import {useState} from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import {success,error} from "../components/Notify"

export default function Upload(){

const[file,setFile]=useState(null)

const upload=async()=>{

if(!file){

error("Please select a file")

return

}

let form=new FormData()

form.append("file",file)

try{

await axios.post(

"http://127.0.0.1:8000/upload_attendance",

form,

{

headers:{

"Content-Type":"multipart/form-data"

}

}

)

success("Attendance uploaded successfully")

}catch{

error("Upload failed")

}

}

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={main}>

<Navbar/>

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

Upload Attendance

</button>

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

color:"white",

padding:"30px"

}

const uploadBox={

background:"#020617",

padding:"40px",

width:"400px",

borderRadius:"10px",

marginTop:"30px",

boxShadow:"0px 0px 15px black"

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

width:"100%",

borderRadius:"8px"
}
