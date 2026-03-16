import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function success(msg){

toast.success(msg,{
position:"top-right"
})

}

export function error(msg){

toast.error(msg,{
position:"top-right"
})

}

export function warn(msg){

toast.warn(msg,{
position:"top-right"
})

}

export function info(msg){

toast.info(msg,{
position:"top-right"
})

}

export default function Notify(){

return(

<ToastContainer/>

)

}
