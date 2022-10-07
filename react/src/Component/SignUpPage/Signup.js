import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom"
import './Signup.css'
class Signup extends Component {
  state = {
    name: "",
    email: '',
    password: '',
    confirmPassword: "",
    mobile: "",
    role: '',
    userNameValid: false,
    emailValid: false,
    isPasswordValid: false,
    isconfirmPassword: false,
    isMobileNumberValid: false,
    isRoleValid: false
  }
  onSucbmitSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  submitForm = async (event) => {
    event.preventDefault()
    this.onChangeUsername();
    this.onChangeEmail();
    this.onChangeMobileNumber();
    this.onChangePassword();
    this.userDefine();
    this.confirmPasswordField();
    const { email, password, name, mobile, role, isRoleValid, userNameValid, emailValid, isPasswordValid, isMobileNumberValid, isconfirmPassword} = this.state;
    if((!isRoleValid && role) && (!emailValid && email) && (!isPasswordValid && password) && (!userNameValid && name) && (!isMobileNumberValid && mobile) && !isconfirmPassword){
      const userDetails = { email, password, name, mobile, role }
      const url = "http://localhost:8081/user/signup"
      const options = {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
  
      const data = await response.json()
      console.log(data.response)
      if (data.status === 200) {
        this.onSucbmitSuccess(data.statusCode)
      }
    }

    else{
      return;
    }
   
  }
  userDefine = (event) => {
    // console.log(event.target.value)
    const { role } = this.state;
    const val = event ? event.target.value : role;
    if (val == "admin" || val == "student") {
      this.setState({ role: val });
      this.setState({ isRoleValid: false });
      // console.log(role)
    } else {
      this.setState({ role: val });
      this.setState({ isRoleValid: true });
    }
  }
  onChangeUsername = (event) => {
    const { name } = this.state
    const val = event ? event.target.value : name
    if ( /^[a-zA-Z\-]+$/.test(val)) {
      this.setState({ name: val })
      this.setState({ userNameValid: false })
    }
    else {
      this.setState({ name: val })
      this.setState({ userNameValid: true })
    }
  }
  onChangeEmail = event => {
    const { email } = this.state
    const val = event ? event.target.value : email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      this.setState({ email: val });
      this.setState({ isEmailValid: false });
    } else {
      this.setState({ email: val });
      this.setState({ isEmailValid: true });
    }

  }

  onChangePassword = event => {
    const { password } = this.state
    const val = event ? event.target.value : password
    if (val !== "") {
      this.setState({ password: val })
      this.setState({ isPasswordValid: false })
    }
    else {
      this.setState({ password: val })
      this.setState({ isPasswordValid: true })
    }

  }

  confirmPassword = event => {
    const {  password} = this.state
    const val = event.target.value
    //  : confirmPassword
    if (val === password) {
      this.setState({ confirmPassword: val })
      this.setState({ isconfirmPassword: false })
    }
    else {
      this.setState({ confirmPassword: val })
      this.setState({ isconfirmPassword: true })
    }

  }

  onChangeMobileNumber = event => {
    const { mobile } = this.state;
    const val = event ? event.target.value : mobile
    if (val !== "") {
      this.setState({ mobile: val })
      this.setState({ isMobileNumberValid: false })
    }
    else {
      this.setState({ mobile: val })
      this.setState({ isMobileNumberValid: true })
    }

  }

  renderUsernameField = () => {
    const { name, userNameValid } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="email">
          USER NAME
        </label>
        <input
          type="text"
          placeholder="Entet Name"
          className={`username-input-filed ${userNameValid ? 'border-err' : ''}`}
          value={name}
          onChange={this.onChangeUsername}
        />
        {userNameValid && <p className='error'>User Name Required</p>}
      </>
    )
  }

  renderPasswordField = () => {
    const { password, isPasswordValid } = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="range B/W 6-14 only"
          className={`username-input-filed ${isPasswordValid ? 'border-err' : ''}`}
          value={password}
          onChange={this.onChangePassword}
        />
        {isPasswordValid && <p className='error'>Password Required</p>}
      </>
    )
  }


  confirmPasswordField = () => {
    const { confirmPassword, isconfirmPassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
         CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="range B/W 6-14 only"
          className={`username-input-filed ${isconfirmPassword ? 'border-err' : ''}`}
          value={confirmPassword}
          onChange={this.confirmPassword}
        />
        {isconfirmPassword && <p className='error'>Password did't match</p>}
      </>
    )
  }
  

  renderEmailField = () => {
    const { email, isEmailValid } = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          placeholder="example@gmail.com"
          className={`username-input-filed ${isEmailValid ? 'border-err' : ''}`}
          value={email}
          onChange={this.onChangeEmail}
        />
        {isEmailValid && <p className='error'>Email Invalid</p>}
      </>
    )
  }

  renderMobileNumberField = () => {
    const { mobile, isMobileNumberValid } = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          MOBILE NUMBER
        </label>
        <input
          type="text"
          id="mobile"
          placeholder="Numbers only"
          className={`username-input-filed ${isMobileNumberValid ? 'border-err' : ''}`}
          value={mobile}
          onChange={this.onChangeMobileNumber}
        />
        {isMobileNumberValid && <p className='error'>Invalid Mobile Number</p>}
      </>
    )
  }

  render() {

    const { isRoleValid } = this.state;
    console.log("isRoleValid",isRoleValid)
    return (
      <div>
        <div className="login-form-container">
          <img
            src="https://media.istockphoto.com/vectors/welcome-to-our-community-friendly-man-sitting-on-banner-and-waving-vector-id1019514594?k=6&m=1019514594&s=170667a&w=0&h=3Olt7WnXE8sL67p_pxoAs6AXspo3G766E28xUi8USzY="
            className="signup-image"
            alt="website Sign up"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <h1 className="signup-message"> Sign up here</h1>

            <div className="input-container">
              <div className="input-container">
                <label className="input-label" htmlFor="role">USER TYPE</label>
                <select id="role" defaultValue={'DEFAULT'} className={`selectUserType ${(isRoleValid) ? 'border-err' : ''}`} onChange={this.userDefine}>
                  <option value="DEFAULT" className="typeOfUser" disabled>select</option>
                  <option className="typeOfUser" value="admin">Admin</option>
                  <option className="typeOfUser" value="student">Student</option>
                </select>
                {isRoleValid && <p className='error'>Role is required</p>}
              </div>

            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            {/* {error ? <div className="userError">Please enter valid username</div> : false} */}
            <div className="input-container">{this.renderEmailField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className="input-container">{this.confirmPasswordField()}</div>
            <div className="input-container">{this.renderMobileNumberField()}</div>
            <button type="submit" className="Signup-button">
              Sign up
            </button>
            <p className="loginPara">Already have an account? <Link to="/login"> <span className="signuplink"> Login</span> </Link> </p>
          </form>
        </div>

      </div>
    )
  }
}
export default Signup