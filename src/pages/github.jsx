import NavPanel from '../components/NavPanel';
import navList from '../statics/navList';

export default function Github() {
  return(
   <div>
    <NavPanel currentPage={navList.GITHUB} />
   </div>
  );
}