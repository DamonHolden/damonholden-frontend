const Result = (props) => {
    if (props.degree === "Make sure all grade fields are filled out before calculating.") return <div className="output" id="output" style={{color : "red"}}>{props.degree}</div>
    else return <div className="output" id="output">{props.degree}</div>
}

export default Result