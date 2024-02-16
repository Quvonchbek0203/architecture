import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";


import "./App.css"
import Latest from "./pages/Latest";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <hr/>
      <Gif/>
      <br /><br />
      <Latest/>
    </div>
  );
}

export default App;
