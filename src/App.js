import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
import Latest from "./pages/Latest";
import Images from "./pages/Images";

import "./App.css"
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
      <br />
      <Images/>
    </div>
  );
}

export default App;
