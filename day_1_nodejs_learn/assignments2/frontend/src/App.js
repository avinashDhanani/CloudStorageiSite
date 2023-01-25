import "./App.css";
import Navbar from "./component/Navbar";
import CreateFolder from "./pages/CreateFolder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import EditFile from "./pages/EditFile";

function App() {
  return (
    <div className="App">
       <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path='/updateFile' element={<EditFile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
