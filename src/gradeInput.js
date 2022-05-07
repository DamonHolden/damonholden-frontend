const GradeInput = (props) => {
    return (
    <label > 
        {props.label}
        <br/> 
        <input type="number" id={props.id} name={props.id} />
        <br/>
    </label>
    );
}

export default GradeInput