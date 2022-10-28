//import logo from './logo.svg';
import './App.css';
import { StudentData } from './components/StudentData';
//import { StudentDetails } from './components/StudentDetails';
import { StuTable } from './components/StudentTable';
//import { StudentForm } from './StudentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*  <StudentForm/> */}
       {/*  <StudentDetails/> */}
       <StuTable/>
       <StudentData/> 
      </header>
    </div>
  );
}

export default App;
