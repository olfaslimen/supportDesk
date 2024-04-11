
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import HeaderApp from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    
      <div className="container">
      <Router>
      <HeaderApp></HeaderApp>

        <Routes >
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
        </Router>

      </div>
      
    </>
  );
}

export default App;
