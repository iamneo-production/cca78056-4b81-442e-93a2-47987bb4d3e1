import React, { Component } from 'react'
import Header from '../../Component/Home/Nav'
import './AddInstitute.css'

class AddInstitute extends Component {
    state = {
        imgUrl : '',
        email : '',
        name : '',
        mobile : '',
        address : '',
        description : ''
    }

    onSucbmitSuccess = () => {
        // alert("Institute added succssfully")
        const {history} = this.props
        history.push('/institute')
    }

    onSubmit = async event => {
        event.preventDefault();
        const {imgUrl, email, name, mobile, address, description} = this.state;
        const instDetails = {imgUrl, email, name, mobile, address, description};
      const url = "http://localhost:8081/admin/addinstitute"
      const options = {
        method: "POST",
        headers : {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(instDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json();
      if(data.status === 200){
        this.onSucbmitSuccess()

      }
    }

    // getID = (event) => { // id//
    //     // const {Insid} = this.state
    //     this.setState({Insid: event.target.value})
    // }

    geteName = event => { // Institute name //
        // const {insName} = this.state;
        this.setState({name: event.target.value})
    }
    getUrl = event => { // url //
        // const {url} = this.state
        this.setState({imgUrl: event.target.value})
    }
    geteNumber = event => { // number //
        // const {number} = this.state
        this.setState({mobile: event.target.value})
    }
    geteEmail = event => { // email //
        // const {email} = this.state
        this.setState({email: event.target.value})
    }
    getAdress = event => { // adrerss //
        // const {adress} = this.state
        this.setState({address: event.target.value})
    }
    
    getDes = event => { // des//
        // const {des} = this.state
        this.setState({description: event.target.value})
    }

    render(){

        return(

           <div>
                <Header nav={"ainstitute"}/>
                 <div className='login-form-container'>
                <img 
                    src='https://assets.justinmind.com/wp-content/uploads/2019/11/20-best-ux-design-blogs.png'
                    className="signup-image"
                    alt="Add institute"
                />
                <form className='form-container' onSubmit={this.onSubmit}>
                    {/* <input type="number" placeholder='id' onChange={this.getID} value={id}/> */}
                    <div className='input-conrainer form-style'>
                    <input type="text"  className="username-input-filed" placeholder="Institute Name" onChange={this.geteName}/>
                    <input type="text"  className="username-input-filed" placeholder='Institute url'onChange={this.getUrl} />
                    <input type="text"  className="username-input-filed" placeholder='email' onChange={this.geteNumber}/>
                    <input type="text"  className="username-input-filed" placeholder='number' onChange={this.geteEmail}/>
                    <input type="text"  className="username-input-filed" placeholder='adress' onChange={this.getAdress}/>
                    <input type="text"  className="username-input-filed" placeholder='des' onChange={this.getDes}/>
                    </div>
                    
                    <button className="Signup-button">Add</button>
                </form>

            </div>
           </div>
        )
    }
}

export default AddInstitute