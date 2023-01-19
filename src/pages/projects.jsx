import NavPanel from '../components/NavPanel';
import navList from '../statics/navList';

export default function Projects() {
  return(
   <div>
    <NavPanel currentPage={navList.PROJECTS} />
   </div>
  );
}