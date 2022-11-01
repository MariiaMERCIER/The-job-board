const Job = (props) =>{
    return(
        <div className="job">
        <h2>{props.title}</h2>
        <p className="jobParagraphe">{props.contractType} - {props.country} - {props.city}</p>
        </div>
    )
}

export default Job;