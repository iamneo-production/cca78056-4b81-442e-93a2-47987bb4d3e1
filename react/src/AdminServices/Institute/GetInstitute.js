import React from 'react'
import { Link } from 'react-router-dom'
import './Get.css'
import { useHistory } from "react-router-dom";
const GetInstitute = props => {
    const { instituteData, role, onDeleteInstitute, i } = props
    const history = useHistory();

    const { id, instituteName, instituteDescription, instituteAddress, mobile, email, imgUrl, } = instituteData

    const deleteInstitute = (event) => {
        event.stopPropagation();
        onDeleteInstitute(id, i);
    }

    const getCourse = (id) => {
        history.push(`/course/${id}`);

    }

    const addToCart = () => {
        alert("Added Successfully")

    }
    const url = `/edit/institute/${id}`
    return (
        <div>
            <div className='item-container' >
                <div className="child-div" onClick={() => { getCourse(id) }}>
                    <div className="img-div">
                        <img src={imgUrl} alt={id} className="blog-image"/>
                    </div>
                    <div className="ins-details">
                        <h1 className="institute-name"> Institute Name: {instituteName}</h1>
                        <p class="ins-des"> Description: {instituteDescription}</p>
                        <p class="ins-des"> Contact No: {mobile}</p>
                        <p class="ins-des"> Email: {email}</p>
                        <p class="ins-des"> Address: {instituteAddress}</p>
                    </div>
                </div>
                {(role !== 'student') ? <div className='button-container'>
                    <Link to={url}> <button className='edit-button' > Edit institute </button></Link>
                    <button className='delete-button' onClick={deleteInstitute}>Delete institute</button>
                </div> :
                    ''
                }
            </div>
        </div>
    )
}

export default GetInstitute