import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import DatabaseTester from './Components/DatabaseTester';
import Videos from './Components/Videos';
import Footer from './/Components/Footer';
import './styles.css';
import { DarkThemeContextProvider } from './Components/DarkThemeContext';
import ArrayConverter from './Components/ArrayConverter';

const App = () => {
  return (
    <Router>
      <DarkThemeContextProvider>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/UOS_DTS_Calculator' element={<Calculator />} />
            <Route path='/DatabaseTester' element={<DatabaseTester />} />
            <Route path='/Array_Converter' element={<ArrayConverter />} />
            <Route path='/Videos' element={<Videos />} />
          </Routes>
          <Footer />
        </div>
      </DarkThemeContextProvider>
    </Router>
  );
};

export default App;
