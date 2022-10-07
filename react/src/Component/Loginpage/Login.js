import React from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import  {Component} from 'react'
import {Link} from "react-router-dom"
import './Login.css'

class LoginForm extends Component {
  state = {
    email: '',
    isEmailValid : false,
    password: '',
    isPasswordValid : false,
    role: "",
    isRoleValid : false,
    valuesNotMatch: false
  }
  onSucbmitSuccess = data =>{
    const {history} = this.props;
    Cookies.set('jwt_token', data.role, {expires:30})
    localStorage.setItem('userRole',data.role);
    localStorage.setItem('userId',data.userId);
    history.push('/');
  }
  showErrorMessage = () => {
    this.setState({valuesNotMatch: true})
  }
  
  submitForm = async (event) => {
    event.preventDefault();
    this.onChangeEmail();
    this.onChangePassword();
    const {isEmailValid, email, password, role, isPasswordValid} = this.state
    if((!isEmailValid && email) && (!isPasswordValid && password) ){
      const userDetails = {email, password, role}
      const url = "http://localhost:8081/user/login"
      const options = {
        method: "POST",
        headers : {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json();
      if(data.status === 200){
        this.onSucbmitSuccess(data)
      }
      else{
        this.showErrorMessage()
      } 
    }else{
      return;
    }
  }
 

  onChangeEmail = (event) => {
    const {email} = this.state;
    let val = event ? event.target.value : email;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)){
      this.setState({email: val});
      this.setState({isEmailValid: false});
    }else{
      this.setState({email: val});
      this.setState({isEmailValid: true});
    }
  }

  onChangePassword = (event) => {
    const {password} = this.state;
    let val = event ? event.target.value : password;
    if(val){
      this.setState({password: val});
      this.setState({isPasswordValid: false});
    }else{
      this.setState({password: val});
      this.setState({isPasswordValid: true});
    }
  }

  renderPasswordField = () => {
    const {password, isPasswordValid} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder='Enter password'
          className={`username-input-filed ${isPasswordValid ? 'border-err' : ''}`}
          value={password}
          onChange={this.onChangePassword}
        />
        {isPasswordValid && <p className='error'>Password Not Valid</p>}
      </>
    )
  }

  renderEmailField = () => {
    const {email, isEmailValid} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          placeholder='example@gmail.com'
          className={`username-input-filed ${isEmailValid ? 'border-err' : ''}`}
          value={email}
          onChange={this.onChangeEmail}
        />
        {isEmailValid && <p className='error'>Email Not Valid</p>}
      </>
    )
  }

  render() {
    const {valuesNotMatch} = this.state;
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined){
      return <Redirect to="/"/>
    }
    return (
     <div>
         <div className="login-form-container">
       
       <img
         src="https://i.pinimg.com/originals/ce/c6/0b/cec60b45d8a44a2ca7bc047450ade16d.png"
         className="login-image"
         alt="website login"
       />
       
       <form className="form-container" onSubmit={this.submitForm}> 
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPs-S06IbCwG6dyZRjqq0GG1Po4h2AirEGZA&usqp=CAU"
           className="login-website-logo-desktop-image"
           alt="website logo"
         />
        
         
         <div className="input-container">{this.renderEmailField()}</div>
         <div className="input-container">{this.renderPasswordField()}</div>
         
         {valuesNotMatch && <p className='error-message'>Email and Password did'nt match</p>}
         <button type="submit" className="login-button" onClick={this.submitForm}>
           Login
         </button>
         <p className='signupPara'>New user?   <Link to="/signup"> <span className='signupLink'> Signup</span> </Link> </p>
       </form>
     </div>
     </div>
    )
  }
}

export default LoginForm
