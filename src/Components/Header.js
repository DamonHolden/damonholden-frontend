import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkThemeContext } from './DarkThemeContext';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  return (
    <div className='header'>
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
        <Link className='nav-link' to='/Array_Converter'>
          Array Converter
        </Link>
        <Link className='nav-link' to='/Duck'>
          Duck
        </Link>
      </nav>
      <button
        className='theme-button'
        onClick={() => setDarkTheme((previousTheme) => !previousTheme)}
      >
        {darkTheme ? 'Toggle Light Theme' : 'Toggle Dark Theme'}
      </button>
    </div>
  );
};

export default Header;
