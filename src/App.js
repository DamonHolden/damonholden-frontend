import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import DatabaseTester from './Components/DatabaseTester';
import Videos from './Components/Videos';
import Footer from './/Components/Footer';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='background' />
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/UOS_DTS_Calculator' element={<Calculator />} />
          <Route path='/DatabaseTester' element={<DatabaseTester />} />
          <Route path='/Videos' element={<Videos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
