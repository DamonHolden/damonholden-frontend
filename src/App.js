import './styles.css';
import Footer from './/Components/Footer';
import Calculator from './Components/Calculator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DatabaseTester from './Components/DatabaseTester';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
// import 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js'
// prettify link currently bugged when building in netlify

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='background' />
        <div className='content'>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/UOS_DTS_Calculator' element={<Calculator />} />
            <Route path='/DatabaseTester' element={<DatabaseTester />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
