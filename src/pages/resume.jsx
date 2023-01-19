import NavPanel from '../components/NavPanel';
import navList from '../statics/navList';

export default function Blog() {
  return(
   <div>
    <NavPanel currentPage={navList.RESUME} />
   </div>
  );
}
