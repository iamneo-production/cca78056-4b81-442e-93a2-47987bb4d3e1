import React, { Component }  from 'react';
import GetCourse from './GetCourse';
import Header from '../../Component/Home/Nav';
import { Link } from "react-router-dom";
import './ViewCourse.css';

export class viewCourse extends Component {
    state = { uId: "", CourseData: [], CourseDataCopy: [], role: "", isAddInst: "", search: "", instId: "", };
    componentDidMount() {
        let r = localStorage.getItem('userRole').toString();
        let uId = localStorage.getItem('userId').toString();
        this.state.role = r;
        this.state.uId = uId;
        this.state.instId = this.props.match.params.id;
        this.getCoursedata(this.props.match.params.id);
        if(r !== 'admin'){
            setTimeout(() => {
                this.viewCart();
            }, 500);
        }
    }

    onSreach = event => {
        this.setState({ search: event.target.value })
    }

    getCoursedata = async (id) => {
        const { role } = this.state;
        const response = await fetch(`http://localhost:8081/${role}/course/${id}`)
        const data = await response.json();
        const displayCourse = data.map(eachItem => ({
            id: eachItem.courceId,
            courseName: eachItem.name,
            courseDescription: eachItem.description,
            Duration: eachItem.duration
        }));
        this.setState({ CourseData: displayCourse });
    }

    ondeleteCourse = async (id, i) => {
        const { CourseData, role } = this.state;
        const options = {
            "method": "DELETE",

        }
        const url = `http://localhost:8081/${role}/deleteCourse?courseId=${id}`
        const response = await fetch(url, options)
        const data = await response.json();
        if (data.status === 200) {
            CourseData.splice(i, 1);
            this.setState({ CourseData: CourseData });
            alert("Course deleted");
        }
    }

    viewCart = async () => {
            let displayCourse = [...this.state.CourseData]
            const { role } = this.state;
            const url = `http://localhost:8081/${role}/enroll/${this.state.uId}`;
            const getCartItems = await fetch(url);
            const cartItems = await getCartItems.json();
            let mapOj = cartItems.reduce((acc, item)=>{
                acc[item.courseId] = true;
                return acc; 
            },{})
            displayCourse.forEach(item => {
                if(mapOj[item.id]){
                    item["enrolled"] = true;
                }else{
                    item["enrolled"] = false;
                }
            });
            this.setState({ CourseData: displayCourse });
    }
    onCourceAdded(id){
        let { CourseData } = this.state;
        CourseData.find((item)=>{
            if(item.id === id){
                item.enrolled = true;
            }
        });
        this.setState({CourseData : CourseData});
    }
    render() {
        let { CourseData, role, isAddInst, search } = this.state;
        CourseData = CourseData.filter(eachData =>
                eachData.courseName.toLowerCase().includes(search.toLowerCase())
        )
        const url = `/add/course/${this.state.instId}`
        return (
            <div>
                <Header nav={'institute'} shouldShow={role !== 'student' ? true : false} text={"Add Institute"} />
                <div className="search-course-div" >
                    <input type='search'
                        onChange={this.onSreach}
                        value={search}
                        placeholder="Search course"
                        className='course-search-bar'
                    />
                    {role !== 'student' && <Link to={url}> <button className='add-course-button' >Add Cource</button> </Link>}
                </div>
                {!isAddInst ?
                    <div className='institute-container'>
                        {CourseData.length > 0 ? CourseData.map((item, i) => <GetCourse onCourceAdded={this.onCourceAdded.bind(this)} instId={this.state.instId} role={role} i={i} CourseData={item}
                            ondeleteCourse={this.ondeleteCourse} />) :
                            <div>No Data Found</div>
                        }
                    </div> :
                    <div >
                        <input type="search"></input>
                    </div>
                }
            </div>
        )
    }
}

export default viewCourse