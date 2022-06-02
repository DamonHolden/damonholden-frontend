import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkThemeContextProvider } from './Components/DarkThemeContext';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/pages/Home';
import { Calculator } from './Components/pages/Calculator';
import { DatabaseTester } from './Components/pages/DatabaseTester';
import { ArrayConverter } from './Components/pages/ArrayConverter';
import { Videos } from './Components/pages/Videos';
import { PetInsuranceInfo } from './Components/pages/PetInsuranceInfo';
import { GitMessageCreator } from './Components/pages/GitMessageGenerator';

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
            <Route
              path='/Git_Message_Creator'
              element={<GitMessageCreator />}
            />
          </Routes>
          <Footer />
        </div>
      </DarkThemeContextProvider>
    </Router>
  );
};
