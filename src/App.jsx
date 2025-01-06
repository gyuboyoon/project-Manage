import NewProject from "./components/NewProjects.jsx";
import ProjectsStidebar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectsStidebar />
      <NewProject />
    </main>
    </>
  );
}

export default App;
