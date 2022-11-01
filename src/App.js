import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import ToolsPage from "./components/ToolsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <ProjectPage />
      <ToolsPage/>
    </div>
  );
}

export default App;
