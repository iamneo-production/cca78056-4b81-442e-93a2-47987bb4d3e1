import React from 'react'
import { Link } from 'react-router-dom';

import './GetCourse.css'

const GetCourse = props => {
    const { CourseData, role, ondeleteCourse, i, instId, onCourceAdded } = props;
    const userId = localStorage.getItem("userId");
    const { id, courseName, courseDescription, Duration, enrolled } = CourseData;
    const deleteCourse = () => {
        ondeleteCourse(id, i);
    }
    const addToCart = async () => {
        onCourceAdded(CourseData.id);
        const url = `http://localhost:8081/${role}/enroll`;
        const courseDetails = { studentId: userId, courseId: CourseData.id.toString(), instituteId: instId }
        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(courseDetails),
        }
        const response = await fetch(url, options);
        // const data = response.json;
    }
    return (
        <div className='courseContainer'>
            <div className='item-container'>
                <h1>{courseName}</h1>
                <p>{courseDescription}</p>
                <p>{Duration}</p>
                {(role !== 'student') ?
                    <div className='button-container'>
                        <Link to="/edit/institute">
                            <button className='edit-button' > Edit Course </button>
                        </Link>
                        <button className='delete-button' onClick={deleteCourse}>Delete Course</button>
                    </div> :
                    <div className='button-container'>
                        {enrolled && <button className='edit-button' disabled>Enrolled</button>}
                        {!enrolled && <button className='edit-button' onClick={addToCart}>Enroll</button>}
                    </div>
                }
            </div>
        </div>
    )
}

export default GetCourse