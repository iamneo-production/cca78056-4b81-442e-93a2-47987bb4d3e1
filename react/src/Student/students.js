import React, { Component } from 'react';
import Header from '../Component/Home/Nav';
import './student.css'
export class StudentsList extends Component {
    state = { students: [], hideTable: false, student: {}, cources: [] };
    componentDidMount() {
        this.getStudents();
    }
    getStudents = async () => {
        const role = localStorage.getItem("userRole");
        const response = await fetch(`http://localhost:8081/${role}/student`);
        const resp = await response.json();
        this.setState({ students: resp });
    }
    viewStudent = async (student) => {
        const role = localStorage.getItem("userRole");
        this.setState({ hideTable: true });
        this.setState({ student });
        const response = await fetch(`http://localhost:8081/${role}/student/cources/${student.id}`);
        const resp = await response.json();
        this.setState({ cources: resp });
    }
    goBack = () => {
        this.setState({ hideTable: false });
    }
    render() {
        return (
            <>
                <Header nav={"students"} />
                {
                    this.state.hideTable ?
                        <button className='go-back' onClick={this.goBack}>Go Back</button>
                        : ''
                }
                {!this.state.hideTable ?
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.map((student) =>
                                <tr className='table-row' onClick={() => { this.viewStudent(student) }}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.mobile}</td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                    :
                    <div>
                        {this.state.cources.length > 0 && <h1 className='heaed'>Cources Enrolled</h1>}
                        <div className='course-cart1'>
                            {
                                this.state.cources.length > 0 ?
                                    this.state.cources.map(
                                        item =>
                                            <div className='course1'>
                                                <div className='info'>
                                                    <h1> {item.name}</h1>
                                                    <p>Duration : {item.duration}</p>
                                                </div>
                                            </div>
                                    )
                                    :
                                    ''
                            }
                        </div>
                        {this.state.cources.length == 0  && <h1 className='heaed'>No cource found for the student </h1>}
                    </div>
                }
            </>
        )
    }
}
export default StudentsList;