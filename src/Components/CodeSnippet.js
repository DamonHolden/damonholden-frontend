const CodeSnippet = () => {
  const code = `const degreeCalculator = () => {
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
};`;

  return <pre className='prettyprint'>{code}</pre>;
};

export default CodeSnippet;
