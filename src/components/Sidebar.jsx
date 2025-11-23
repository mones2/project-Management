import Button from './Button.jsx'
import selectedProjectId from './SelectedProject.jsx';
export default function Sidebar ({onStartAddProject, projects, onSelecteProject, onSelecteProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">your Projects</h2>
            <div>
            <Button onClick={onStartAddProject} children={'create new project'} />
            </div>
            <ul className='my-1'>
                {projects.map(project => {
                    let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1  hover:bg-stone-800'

                    if (project.id === selectedProjectId){
                        cssClasses+='bg-stone-800 text-stone-200'
                    }
                    else {
                        cssClasses+='text-stone-400'
                    }

                    return <li key={project.id}>
                    <button onClick={() => onSelecteProject(project.id)} className={cssClasses}>{project.title }</button>
                </li>})
                }
            </ul>
            {/* projects....  */}
        </aside>
    );
}  