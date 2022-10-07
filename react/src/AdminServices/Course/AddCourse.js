import React, { Component } from 'react'
import Header from '../../Component/Home/Nav';

class AddCourse extends Component {
    state = {
        imgUrl: '',
        name: '',
        inst_id: '',
        description: '',
        duration: ""
    }

    componentDidUpdate() {
        this.state.inst_id = this.props.match.params.id;
    }

    onSucbmitSuccess = () => {
        const { history } = this.props
        history.push(`/course/${this.state.inst_id}`)
    }

    onSubmit = async event => {
        event.preventDefault();
        const { imgUrl, name, inst_id, description, duration } = this.state;
        const instDetails = { imgUrl, name, inst_id, description, duration };
        const url = "http://localhost:8081/admin/addcourse"
        const options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(instDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json();
        if (data.status === 200) {
            this.onSucbmitSuccess()

        }
    }

    getUrl = event => {
        this.setState({ imgUrl: event.target.value })
    }

    geteName = event => {
        this.setState({ name: event.target.value })
    }


    getDes = event => {
        this.setState({ description: event.target.value })
    }


    getDuration = event => {
        this.setState({ duration: event.target.value })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='login-form-container'>
                    <img
                        src='https://assets.justinmind.com/wp-content/uploads/2019/11/20-best-ux-design-blogs.png'
                        className="signup-image"
                        alt="Add institute"
                    />
                    <form className='form-container' onSubmit={this.onSubmit}>
                        <div className='input-conrainer'>
                            <input type="text" className="username-input-filed" placeholder='Course url' onChange={this.getUrl} />
                            <input type="text" className="username-input-filed" placeholder="Course Name" onChange={this.geteName} />
                            <input type="text" className="username-input-filed" placeholder='Course dess' onChange={this.getDes} />
                            <input type="text" className="username-input-filed" placeholder='duration in months' onChange={this.getDuration} />
                        </div>
                        <button className="Signup-button">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddCourse