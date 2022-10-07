import React , { Component } from "react";
import Header from "../../Component/Home/Nav";
import './EditIns.css'
class EditInstitute extends Component{

    state = {
    }

    componentDidMount(){
        this.state.inst_id = this.props.match.params.id;
        this.getInstitute(this.state.inst_id);
    }

    getInstitute = async (id) => {
        const response = await fetch(`http://localhost:8081/admin/institute/${id}`);
        this.setState({...this.state, ...await response.json()});
        // this.setState({instData : await response.json()});
    }

    geteName = event => { // Institute name //
        this.setState({name: event.target.value})
    }
    getUrl = event => { // url //
        this.setState({imgUrl: event.target.value})
    }
    geteNumber = event => { // number //
        this.setState({mobile: event.target.value})
    }
    geteEmail = event => { // email //
        this.setState({email: event.target.value})
    }
    getAdress = event => { // adrerss //
        this.setState({address: event.target.value})
    }    
    getDes = event => { // des//
        this.setState({description: event.target.value})
    }
    updateInstitute = async (event)=>{
        const {history} = this.props;
        event.preventDefault();

        const url = `http://localhost:8081/admin/institute/${this.state.inst_id}`;
        const options = {
            method: "PUT",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(url,options);
        const resp = await response.json();
        if(resp.status === 200){
            history.push('/institute');
        }
    }

    render(){
        const { address, description, email, imgUrl, mobile, name } = this.state;
        return (
            <div>
                <Header/>
                
                <div className="top-container-card">
                    <div className="child-container-card">
                        <form onSubmit={this.updateInstitute}>
                            <div className="input-container-card ">
                                <label htmlFor="imgulr" className="lable-card"> Institute Img Url </label>
                                <input id='imgulr' className="input-label-card" value={imgUrl} placeholder="Institute Img url" onChange={this.getUrl} type="text"></input>
                                <label htmlFor="InsName" className="lable-card"> Institute Name </label>
                                <input id="InsName" className="input-label-card" value={name} placeholder="Institute Name" onChange={this.geteName} type="text"></input>
                                <label htmlFor="InsName" className="lable-card"> Institute Email </label>
                                <input className="input-label-card" value={email} placeholder="email" onChange={this.geteEmail} type="text"></input>
                                <label htmlFor="InsName" className="lable-card"> Institute Contact Number </label>
                                <input className="input-label-card" value={mobile} placeholder="Mobile" onChange={this.geteNumber} type="text"></input>
                                <label htmlFor="InsName" className="lable-card"> Institute Adress </label>
                                <input className="input-label-card" value={address} placeholder="address" onChange={this.getAdress} type="text"></input>
                                <label htmlFor="InsName" className="lable-card"> Institute Description </label>
                                <input className="input-label-card" value={description} placeholder="Description" onChange={this.getDes} type="text"></input>
                                <button className="update-institute-btn">Update Institute</button>
                            </div>
                        </form>
                    </div>
    
                </div>
            </div>
        )
    }
}

export default EditInstitute