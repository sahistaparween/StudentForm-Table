export function StuTable(props){
    return(
        <table className="table table-bordered">
           {/*  {props.StuData.map((Stu =>
                <tr><td key={Stu.StuId}>{Stu.StuName}</td></tr>))} */}
              <thead>
            <tr>
                <th>Stu Id</th>
                <th>Stu Name</th>
                <th>Stu Salary</th>
            </tr>
            </thead>
            <tbody>
            {
                props.stuData.map(stu =>(
                    <tr>
                        <td>{stu.stuId}</td>
                        <td>{stu.stuName}</td>
                        <td>{stu.stuMarks}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}