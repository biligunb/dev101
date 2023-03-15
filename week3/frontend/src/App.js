import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <main className="py-1">
     <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/home" element={<Home/>} />
     </Routes>
   
   </main>
 </BrowserRouter>

  );
}

export default App;
