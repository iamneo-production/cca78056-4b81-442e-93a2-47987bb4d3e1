import React from 'react'
import Header from './Nav'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './Home.css'
  
const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined){
    return <Redirect to='/login'/>

    
  }
  return (
  <>
    <Header nav={"home"} />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Choose the Course what you like</h1>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          The Institutes help people advance skills, build knowledge and stay ahead
           of evolving trends. People can build the skills they need to advance their
          careers and support those in need through our:
          Use the Plan My Education tab to learn more about our programs.
           If you have more questions, our Customer Success team is here 
           to help at (800) 644-2101 or customersuccess@abacus.org.

        </p>

        <p>
          “I always recommend The Institutes to my friends and colleagues.
           I believe everyone should strive to grow and The Institutes provide
            one of the best opportunities to do so
            </p>
        
      </div>
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/online-3412473_1920.jpeg?meGHIUut1mybIL3pem8eWqk34osmW3Zi"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)}

export default Home
