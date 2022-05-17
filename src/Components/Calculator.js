import degreeCalculator from '../Js functions/degreeCalculator';
import GradeInput from './gradeInput';
import CodeSnippet from './CodeSnippet';
import Result from './Result';
import { useState, useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';

const Calculator = () => {
  const [result, setResult] = useState(
    'Enter module grades above to get your overall degree percentage.'
  );
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };

  return (
    <>
      <h1>UOS DTS Grade Calculator</h1>
      <div className='card' style={cardStyles}>
        <div className='grade-form-area'>
          <div className='grade-form'>
            <h2>Level 5</h2>
            <GradeInput
              label='Introduction to Relational Databases: Assignment 1:'
              id='introductionToRelationalDatabases1'
            />
            <GradeInput
              label='Introduction to Relational Databases: Assignment 2:'
              id='introductionToRelationalDatabases2'
            />
            <GradeInput
              label='Advanced Networking Concepts:'
              id='advancedNetworkingConcepts'
            />
            <GradeInput
              label='Data Structures Algorithms and Advanced Programming:'
              id='dataStructuresAlgorithmsAndAdvancedProgramming'
            />
            <GradeInput label='Research Skills' id='researchSkills' />
            <GradeInput
              label='Software DesignDevelopment and Engineering: Assignment 1:'
              id='softwareDesignDevelopmentAndEngineering1'
            />
            <GradeInput
              label='Software Design Development and Engineering: Assignment 2:'
              id='softwareDesignDevelopmentAndEngineering2'
            />
            <GradeInput
              label='Multimedia Mobile and Internet:'
              id='multimediaMobileAndInternet'
            />
          </div>
          <div className='grade-form'>
            <h2>Level 6</h2>
            <GradeInput label='Distributed Systems' id='distributedSystems' />
            <GradeInput
              label='Information Engineering:'
              id='informationEngineering'
            />
            <GradeInput
              label='Cyber Security Attack:'
              id='cyberSecurityAttack'
            />
            <GradeInput
              label='Cyber Security Defense:'
              id='cyberSecurityDefense'
            />
            <GradeInput
              label='Emergent Technologies:'
              id='emergentTechnologies'
            />
            <GradeInput label='Synoptic Project:' id='synopticProject' />
          </div>
        </div>
        <div className='inner-card'>
          <Result degree={result} />
          <button
            className='calculate-button'
            onClick={() => setResult(degreeCalculator())}
          >
            Calculate
          </button>
        </div>
      </div>
      <CodeSnippet />
    </>
  );
};

export default Calculator;
