import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";

import "./App.css"

function App() {
  return (
    <div className="App">
        <TopBar/>
        <div className="container">
          <SideBar/>
          <Home/>
        </div>
        
    </div>
  );
}

export default App;
