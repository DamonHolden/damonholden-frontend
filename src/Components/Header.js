import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='page-navbar'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/UOS_DTS_Calculator'>
        UOS DTS Calculator
      </Link>
      <Link className='nav-link' to='/DatabaseTester'>
        Database Tester
      </Link>
      <Link className='nav-link' to='/Videos'>
        Videos
      </Link>
    </nav>
  );
};

export default Header;
