import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
import Latest from "./pages/Latest";
import Images from "./pages/Images";
// import Service from "./pages/Service";
import Touch from "./pages/touch";

import "./App.css"
import Map from "./components/map";
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
      {/* <Service/> */}
      <br /><br />
      <Touch/>
      <Map/>
    </div>
  );
}

export default App;
