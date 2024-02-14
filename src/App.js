import "./App.css";
import Home from "./Pages/Home";
import FCL from "./Pages/FCL";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
     
    <div className="App"> 
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/fcl" element= {<FCL/>}/>
    </Routes>
    </div>
  );
}

export default App;
