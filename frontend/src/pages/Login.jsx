import {useState} from "react"
import axios from "axios"

export default function Login(){

const[e,setE]=useState("")
const[p,setP]=useState("")

const login=async()=>{

let r=await axios.post("http://127.0.0.1:8000/login",{

email:e,
password:p

})

localStorage.setItem("token",r.data.token)

window.location="/dashboard"

}

return(

<div>

<h2>Login</h2>

<input placeholder="email" onChange={(x)=>setE(x.target.value)}/>

<input placeholder="password" type="password"
onChange={(x)=>setP(x.target.value)}/>

<button onClick={login}>Login</button>

</div>

)

}
