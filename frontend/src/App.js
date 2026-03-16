import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Interns from "./pages/Interns"
import Upload from "./pages/Upload"
import Calendar from "./pages/Calendar"
import Patterns from "./pages/Patterns"
import Audit from "./pages/Audit"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/interns" element={<Interns/>}/>

<Route path="/upload" element={<Upload/>}/>

<Route path="/calendar" element={<Calendar/>}/>

<Route path="/patterns" element={<Patterns/>}/>

<Route path="/audit" element={<Audit/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
