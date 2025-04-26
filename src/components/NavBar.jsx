import '../index.css'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
     <div className="nav-box"> 
        
        <div className="nav-link">
            <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
            <Link to="/create">Create a Post</Link>
        </div>     
    </div>
    </>
  )
}

export default Navbar
