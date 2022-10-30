import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import WindowPeek from "./components/WindowPeek";
import ToolsPage from "./components/ToolsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <ProjectPage />
      <WindowPeek/>
      <ToolsPage/>
    </div>
  );
}

export default App;
