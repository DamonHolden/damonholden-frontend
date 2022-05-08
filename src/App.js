import './styles.css';
import degreeCalculator from './degreeCalculator';
import React, { useState } from 'react';
import GradeInput from './gradeInput';
import Footer from './Footer';
import CodeSnippet from './CodeSnippet';
// import 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js'
import Result from './Result';

function App() {
  
  const [result, setResult] = useState("Enter module grades above to get your overall degree percentage.");

  return (
    <div className='App'>
      <div className='background' />
        <div className='content'>
          <h1>UOS DTS Grade Calculator</h1>
          <div className='card'>
            <div className="row">
              <div className="column">
                <div>
                <h2>Level 5</h2>
                <form>
                  <GradeInput label="Introduction to Relational Databases: Assignment 1" id="introductionToRelationalDatabases1"/>
                  <GradeInput label="Introduction to Relational Databases: Assignment 2" id="introductionToRelationalDatabases2"/>
                  <GradeInput label="Advanced Networking Concepts" id="advancedNetworkingConcepts"/>
                  <GradeInput label="Data Structures Algorithms and Advanced Programming" id="dataStructuresAlgorithmsAndAdvancedProgramming"/>
                  <GradeInput label="Research Skills" id="researchSkills"/>
                  <GradeInput label="Software DesignDevelopment and Engineering: Assignment 1" id="softwareDesignDevelopmentAndEngineering1"/>
                  <GradeInput label="Software Design Development and Engineering: Assignment 2" id="softwareDesignDevelopmentAndEngineering2"/>
                  <GradeInput label="Multimedia Mobile and Internet" id="multimediaMobileAndInternet"/>
                </form>
                </div>
              </div>
                <div className="column">
                  <div>
                  <h2>Level 6</h2>
                    <form>
                      <GradeInput label="Distributed Systems" id="distributedSystems"/>
                      <GradeInput label="Information Engineering" id="informationEngineering"/>
                      <GradeInput label="Cyber Security Attack" id="cyberSecurityAttack"/>
                      <GradeInput label="Cyber Security Defence" id="cyberSecurityDefence"/>
                      <GradeInput label="Emergent Technologies" id="emergentTechnologies"/>
                      <GradeInput label="Synoptic Project" id="synopticProject"/>
                    </form>
                  </div>
                    <div className="calculateLocation">
                      <input className="calculate" type="button" value="calculate" onClick={() => setResult(degreeCalculator())}/>
                    </div>
                </div>
            </div>
            <Result degree={result}/>
            {/* <div className="output" id="output">{result}</div> */}
          </div>
          <CodeSnippet />
          <Footer />
        </div>
    </div>
  );
}

export default App;
