import { StuTable } from "./StudentTable";
import { StudentDetails } from "./StudentDetails";
export function StudentData(){
    const stuData = [{
        "stuId" : 23123,
        "stuName" : "Ronaldo",
        "stuMarks" : 55
    },{
        "stuId" : 23124,
        "stuName" : "Stebin",
        "stuMarks" : 67
    },{
        "stuId" : 23125,
        "stuName" : "Jackson",
        "stuMarks" : 88
    }];
    return(
/*         <studentDetails stuData = {stuData}/> */
        <StuTable  stuData = {stuData}/>
    )
}