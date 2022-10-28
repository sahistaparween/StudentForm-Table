import '../css/Student.css';
export function StudentDetails(props){
    console.log(props.stuData[0].stuId)
    return(
        <div className='container'>
        <table className="table table-striped table-bordered">
            <thead>
                <tr id="tr1">
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr className="trstyle">
                    <td scope="row">{props.stuData[0].stuId}</td>
                    <td>{props.stuData[0].stuName}</td>
                    <td>{props.stuData[0].stuMarks}</td>
                </tr>
                <tr className="trstyle">
                    <td scope="row">{props.stuData[1].stuId}</td>
                    <td>{props.stuData[1].stuName}</td>
                    <td>{props.stuData[1].stuMarks}</td>
                </tr>
                <tr className="trstyle">
                    <td scope="row">{props.stuData[2].stuId}</td>
                    <td>{props.stuData[2].stuName}</td>
                    <td>{props.stuData[2].stuMarks}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}