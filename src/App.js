import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Calculator } from './Components/Calculator';
import { DatabaseTester } from './Components/DatabaseTester';
import { Videos } from './Components/Videos';
import { PetInsuranceInfo } from './Components/PetInsuranceInfo';
import { Footer } from './/Components/Footer';
import './styles.css';
import { DarkThemeContextProvider } from './Components/DarkThemeContext';
import { ArrayConverter } from './Components/ArrayConverter';

export const App = () => {
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
            <Route path='/Duck' element={<Videos />} />
            <Route path='/Pet_Insurance_Info' element={<PetInsuranceInfo />} />
          </Routes>
          <Footer />
        </div>
      </DarkThemeContextProvider>
    </Router>
  );
};
