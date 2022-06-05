import { GradeInput } from '../GradeInput';
import { CodeSnippet } from '../CodeSnippet';
import { CodeSnippetPicture } from '../CodeSnippetPicture';
import { useState, useRef } from 'react';
import { Card } from '../Card';
import { PageWrapper } from '../PageWrapper';

export const Calculator = () => {
  const introductionToRelationalDatabases1 = useRef();
  const introductionToRelationalDatabases2 = useRef();
  const advancedNetworkingConcepts = useRef();
  const dataStructuresAlgorithmsAndAdvancedProgramming = useRef();
  const researchSkills = useRef();
  const softwareDesignDevelopmentAndEngineering1 = useRef();
  const softwareDesignDevelopmentAndEngineering2 = useRef();
  const multimediaMobileAndInternet = useRef();
  const distributedSystems = useRef();
  const informationEngineering = useRef();
  const cyberSecurityAttack = useRef();
  const cyberSecurityDefense = useRef();
  const emergentTechnologies = useRef();
  const synopticProject = useRef();

  const [result, setResult] = useState(
    'Enter module grades above to get your overall degree percentage.'
  );
  const [nicePicture, setNicePicture] = useState(false);

  const degreeCalculator = () => {
    const getCurrent = (ref) => ref.current.value;

    if (
      [
        getCurrent(introductionToRelationalDatabases1),
        getCurrent(introductionToRelationalDatabases2),
        getCurrent(advancedNetworkingConcepts),
        getCurrent(dataStructuresAlgorithmsAndAdvancedProgramming),
        getCurrent(researchSkills),
        getCurrent(softwareDesignDevelopmentAndEngineering1),
        getCurrent(softwareDesignDevelopmentAndEngineering2),
        getCurrent(multimediaMobileAndInternet),
        getCurrent(distributedSystems),
        getCurrent(informationEngineering),
        getCurrent(cyberSecurityAttack),
        getCurrent(cyberSecurityDefense),
        getCurrent(emergentTechnologies),
        getCurrent(synopticProject),
      ].includes('')
    )
      return 'Make sure all grade fields are filled out before calculating.';

    const getValue = (ref) => Number(ref.current.value);

    const introductionToRelationalDatabases =
      (getValue(introductionToRelationalDatabases1) +
        getValue(introductionToRelationalDatabases2)) /
      2;

    const softwareDesignDevelopmentAndEngineering =
      (getValue(softwareDesignDevelopmentAndEngineering1) +
        getValue(softwareDesignDevelopmentAndEngineering2) * 3) /
      4;

    const levelFiveOverall =
      [
        introductionToRelationalDatabases,
        getValue(advancedNetworkingConcepts),
        getValue(dataStructuresAlgorithmsAndAdvancedProgramming),
        getValue(researchSkills),
        softwareDesignDevelopmentAndEngineering,
        getValue(multimediaMobileAndInternet),
      ]
        .sort((a, b) => b - a)
        .splice(0, 5)
        .reduce((partialSum, a) => partialSum + a, 0) / 5;

    const levelSixOverall =
      ([
        getValue(distributedSystems),
        getValue(cyberSecurityDefense),
        getValue(informationEngineering),
        getValue(cyberSecurityAttack),
      ]
        .sort((a, b) => b - a)
        .splice(0, 3)
        .reduce((partialSum, a) => partialSum + a, 0) +
        ((getValue(synopticProject) * 3 + getValue(emergentTechnologies)) / 4) *
          2) /
      5;

    const degreeType = (percentage) => {
      if (percentage >= 70) return '1st';
      else if (percentage >= 60) return '2:1';
      else if (percentage >= 50) return '2:2';
      else if (percentage >= 40) return '3rd';
      else return 'failed degree';
    };

    const overallMark = Math.round(
      (levelFiveOverall * 4 + levelSixOverall * 6) / 10
    );

    return (
      "You're calculated degree is " +
      overallMark +
      '%, which would be a ' +
      degreeType(overallMark)
    );
  };

  return (
    <PageWrapper>
      <h1>UOS DTS Grade Calculator</h1>
      <Card contentDirection={`column`}>
        <div className='content-row'>
          <div className='grade-form'>
            <h2>Level 5:</h2>
            <GradeInput
              label='Introduction to Relational Databases: Assignment 1:'
              reference={introductionToRelationalDatabases1}
            />
            <GradeInput
              label='Introduction to Relational Databases: Assignment 2:'
              reference={introductionToRelationalDatabases2}
            />
            <GradeInput
              label='Advanced Networking Concepts:'
              reference={advancedNetworkingConcepts}
            />
            <GradeInput
              label='Data Structures Algorithms and Advanced Programming:'
              reference={dataStructuresAlgorithmsAndAdvancedProgramming}
            />
            <GradeInput label='Research Skills:' reference={researchSkills} />
            <GradeInput
              label='Software DesignDevelopment and Engineering: Assignment 1:'
              reference={softwareDesignDevelopmentAndEngineering1}
            />
            <GradeInput
              label='Software Design Development and Engineering: Assignment 2:'
              reference={softwareDesignDevelopmentAndEngineering2}
            />
            <GradeInput
              label='Multimedia Mobile and Internet:'
              reference={multimediaMobileAndInternet}
            />
          </div>
          <div className='grade-form'>
            <h2>Level 6:</h2>
            <GradeInput
              label='Distributed Systems:'
              reference={distributedSystems}
            />
            <GradeInput
              label='Information Engineering:'
              reference={informationEngineering}
            />
            <GradeInput
              label='Cyber Security Attack:'
              reference={cyberSecurityAttack}
            />
            <GradeInput
              label='Cyber Security Defense:'
              reference={cyberSecurityDefense}
            />
            <GradeInput
              label='Emergent Technologies:'
              reference={emergentTechnologies}
            />
            <GradeInput label='Synoptic Project:' reference={synopticProject} />
          </div>
        </div>
        <div className='content-row'>
          <h4>{result}</h4>
          <button
            className='button-primary'
            onClick={() => setResult(degreeCalculator)}
          >
            calculate
          </button>
        </div>
      </Card>
      <Card contentDirection={`column`}>
        <div
          className='content-row'
          style={{ justifyContent: 'space-between' }}
        >
          <h2 className='code-title'>JavaScript logic</h2>
          <button
            className='button-primary'
            onClick={() => setNicePicture((prev) => !prev)}
          >
            {nicePicture
              ? 'show plain text version of code'
              : 'show nice picture of code'}
          </button>
        </div>
        {nicePicture ? <CodeSnippetPicture /> : <CodeSnippet />}
      </Card>
    </PageWrapper>
  );
};
