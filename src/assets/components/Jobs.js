import Job from "./Job"

const Jobs = (props)=>{
    return(
        <div className="formJobs">
        <Job className={props.className1} title={props.title1} contractType={props.contractType1} country={props.country1} city={props.city1}/>
        <Job className={props.className2} title={props.title2} contractType={props.contractType1} country={props.country2} city={props.city2}/>
        <Job className={props.className3} title={props.title3} contractType={props.contractType2} country={props.country2} city={props.city3}/>
        <Job className={props.className4} title={props.title4} contractType={props.contractType2} country={props.country2} city={props.city3}/>
        <Job className={props.className5} title={props.title5} contractType={props.contractType1} country={props.country2} city={props.city3}/>
        <Job className={props.className6} title={props.title6} contractType={props.contractType1} country={props.country3} city={props.city4}/>
        <Job className={props.className7} title={props.title7} contractType={props.contractType1} country={props.country4} city={props.city5}/>
        <Job className={props.className8} title={props.title8} contractType={props.contractType1} country={props.country5} city={props.city6}/>
        <Job className={props.className9} title={props.title9} contractType={props.contractType1} country={props.country2} city={props.city2}/>
       

     
    </div>
    )
}

export default Jobs