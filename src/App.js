import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
import Latest from "./pages/Latest";
import Images from "./pages/Images";
import Service from "./pages/Service";

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
      <br /><br /><br /><br /><br />
      <Service/>
    </div>
  );
}

export default App;
