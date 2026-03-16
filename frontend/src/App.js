import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Interns from "./pages/Interns"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/interns" element={<Interns/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
