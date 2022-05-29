import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkThemeContext } from './DarkThemeContext';

export const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  const opposite = () => (!darkTheme ? 'true' : 'false');

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
        <Link className='nav-link' to='Pet_Insurance_Info'>
          Pet Insurance Info
        </Link>
        <Link className='nav-link' to='Git_Message_Creator'>
          Git Message Creator
        </Link>
      </nav>
      <button
        className='button-secondary'
        onClick={() => {
          setDarkTheme((previousTheme) => !previousTheme);
          localStorage.setItem('darkTheme', opposite());
        }}
      >
        {darkTheme ? 'Toggle Light Theme' : 'Toggle Dark Theme'}
      </button>
    </div>
  );
};
