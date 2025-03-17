import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
      <Link to="/">IJCST</Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/archives">Archives</Link></li>
      <li><Link to="/submit">Submit Paper</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  );
}

export default Navbar;