import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Calculator</Link>
      <Link to="/DatabaseTester">Database Tester</Link>
    </nav>
  );
};

export default NavBar;
