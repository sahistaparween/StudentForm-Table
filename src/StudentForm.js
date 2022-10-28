import React from "react";
export class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentname : '',
            studentage : '',
            studentemail : '',
        }
    }

    handleInput = (event) =>{
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.studentname);
        console.log(this.state.studentage);
        console.log(this.state.studentemail);
        alert(this.state.studentname + "form submitted");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Student Name</label>
                    <input type="text" name="studentname"
                        value={this.state.studentname}
                        onChange={this.handleInput} /> <br />
                    <label>Student Age</label>
                    <input type="text" name="studentage"
                        value={this.state.studentage}
                        onChange={this.handleInput} />  <br />
                    <label>Student Email</label>
                    <input type="text" name="studentemail"
                        value={this.state.studentemail}
                        onChange={this.handleInput} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}