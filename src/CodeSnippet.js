const CodeSnippet = () => {

    const code = `const degreeCalculator = () => {

    let result;

    const getData = data => parseInt(document.getElementById(data).value)

    const introductionToRelationalDatabases = (getData("introductionToRelationalDatabases1") + getData("introductionToRelationalDatabases2")) / 2
    const advancedNetworkingConcepts = getData("advancedNetworkingConcepts")
    const dataStructuresAlgorithmsAndAdvancedProgramming = getData("dataStructuresAlgorithmsAndAdvancedProgramming")
    const researchSkills = getData("researchSkills")
    const softwareDesignDevelopmentAndEngineering = (getData("softwareDesignDevelopmentAndEngineering1") + (getData("softwareDesignDevelopmentAndEngineering2") * 3)) / 4            
    const multimediaMobileAndInternet = getData("multimediaMobileAndInternet")
    const distributedSystems = getData("distributedSystems")
    const informationEngineering = getData("informationEngineering")
    const cyberSecurityAttack = getData("cyberSecurityAttack")
    const cyberSecurityDefence = getData("cyberSecurityDefence")
    const emergentTechnologies = getData("emergentTechnologies")
    const synopticProject = getData("synopticProject")
    
    const levelFiveOverall = ([
            introductionToRelationalDatabases, 
            advancedNetworkingConcepts,dataStructuresAlgorithmsAndAdvancedProgramming,
            researchSkills,
            softwareDesignDevelopmentAndEngineering,
            multimediaMobileAndInternet
        ].sort((a,b)=>b-a).splice(0,5).reduce((partialSum, a) => partialSum + a, 0)
    ) / 5

    const levelSixOverall = (([
            distributedSystems, 
            cyberSecurityDefence, 
            informationEngineering, 
            cyberSecurityAttack
        ].sort((a,b)=>b-a).splice(0,3).reduce((partialSum, a) => partialSum + a, 0)
    ) + ((((synopticProject * 3) + emergentTechnologies) / 4) * 2)) / 5

    const degreeType = percentage => {
        if (percentage >= 70) return "1st"
        else if (percentage >= 60) return "2:1"
        else if (percentage >= 50) return "2:2"
        else if (percentage >= 40) return "3rd"
        else return "failed degree"
    }

    const overallMark = Math.round((((levelFiveOverall * 4) + (levelSixOverall * 6)) / 10))

    if (isNaN(overallMark)) result = "Make sure all grade fields are filled out before calculating."
    else result = "You're calculated degree is " + overallMark + "%, which would be a " + degreeType(overallMark)

    return result
}`

    return (
    <div class="code">
        <h2 class="codeTitle">JavaScript logic</h2>
        <pre class="prettyprint">
            { code }
        </pre>
    </div>
    );
}

export default CodeSnippet;