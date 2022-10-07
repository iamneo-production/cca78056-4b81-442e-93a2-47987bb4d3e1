import React, { Component } from 'react'
import GetInstitute from './GetInstitute'
import Header from '../../Component/Home/Nav'
import './ViewInstitute.css';


export class viewInstitute extends Component {

    state = { instituteData: [], role: "", isAddInst: "", search: "", isModal: false }

    componentDidMount() {
        let r = localStorage.getItem('userRole').toString();
        this.state.role = r;
        this.getInstituteData();
    }


    onSreach = event => {
        this.setState({ search: event.target.value })
    }


    getInstituteData = async () => {
        const { role } = this.state;
        const response = await fetch(`http://localhost:8081/${role}/institute`)
        const data = await response.json()
        const displayInstitute = data.map(eachItem => ({
            id: eachItem.instId,
            instituteName: eachItem.name,
            instituteDescription: eachItem.description,
            instituteAddress: eachItem.address,
            mobile: eachItem.mobile,
            email: eachItem.email,
            imgUrl: eachItem.imgUrl,
        }))
        this.setState({ instituteData: displayInstitute })

    }

    onDeleteInstitute = async (id, i) => {
        const { instituteData, role } = this.state;
        const options = {
            "method": "DELETE",
        }
        const url = `http://localhost:8081/${role}/deleteInstitute?instID=${id}`
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (data.status === 200) {
            instituteData.splice(i, 1);
            this.setState({ instituteData: instituteData });
            alert("Institute deleted")
        }
    }


    render() {
        const { instituteData, role, isAddInst, search } = this.state
        const serachResult = instituteData.filter(eachData =>
            eachData.instituteName.toLowerCase().includes(search.toLowerCase())
        )
        return (
            <div>
                <Header nav={"institute"} roles={this.state.role} />
                <div className="search-bar" >
                    <input type='search'
                        onChange={this.onSreach}
                        value={search}
                        placeholder="search institute"
                        className='search-bar-cc'
                    />
                </div>
                {!isAddInst ?
                    <div className='institute-container'>
                        {serachResult.map((item, i) => <GetInstitute role={role} i={i} instituteData={item} key={item.id}
                            onDeleteInstitute={this.onDeleteInstitute} />)}
                    </div> :
                    <div>
                        <input type="text"></input>
                    </div>
                }
            </div>
        )
    }
}

export default viewInstitute