import { useState} from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from './components/SelectedProject'
function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined, 
    // undefined" there is no projects 
    // null : there is a projects but not selected
    projects: [],
  });


  function handleSelecteProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId:id
      }
    });
  }
  
  function handelCancelAddProject (){
    setProjectState(pre => {
      return {
        ...pre,
        selectedProjectId: undefined,
      }
    });
  }
  function handleStartAddProject(){
    setProjectState(pre => {
      return {
        ...pre,
        selectedProjectId: null,
      }
    });
  }


  function handleAddProject(projectDate){
    setProjectState(pre =>{
      const newProject = {
        ...projectDate,
        id: Math.random()
      };
      return {
        ...pre,
        selectedProjectId:undefined,
        projects: [...pre.projects,newProject]
      };
    });
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(project => project.id == projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject}/> ;
  if (projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  if (projectState.selectedProjectId === null)
     content = <NewProject onAdd={handleAddProject} onCancel={handelCancelAddProject}/>
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar onSelecteProject = {handleSelecteProject} onStartAddProject={handleStartAddProject} projects = {projectState.projects}/>
      {content}
    </main>
  );
}
 
export default App;
