import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='page-navbar'>
      <Link to='/'>Home</Link>
      <Link to='/UOS_DTS_Calculator'>UOS DTS Calculator</Link>
      <Link to='/DatabaseTester'>Database Tester</Link>
    </nav>
  );
};

export default NavBar;
