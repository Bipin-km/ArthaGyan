import { useState } from 'react'

import './Login.css'

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    phone: ''
  });

  const submissionHandler = (event) => {
    event.preventDefault();
    console.log(formData.dob)

    
    if(formData.password.length==0){
      alert("Password cannot be empty");
      return
    }    
    
    if(formData.password.length<8){
      alert("Password should be at least 8 characters long");
      return
      }
      
    if(formData.password!=formData.confirmPassword){
      alert("Passwords do not match");
      return
    }

    if(formData.username.length<5 || formData.username.length>64){
      alert("Username length : 5-64 characters")
      return
    }

    if(formData.name.length==0){
      alert("Name cannot be empty")
      return
    }

    //Just an email regex found online somewhere on stack overflow
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(formData.email.length==0){
      alert("Email address is required")
      return
    }
    if(!formData.email.match(emailRegex)){
      alert("invalid email format")
      return
    }

    if(formData.dob.length==0){
      alert("Date of birth is required")
      return
      }

    if(Math.floor(((new Date()).getTime() - (new Date(formData.dob)).getTime()) / (1000 * 60 * 60 * 24 * 365.25))<13){
      alert("You must be 13 or older to submit this form")
      return
    }
    
    if(formData.phone.length==0){
      alert("Phone number is required")
      return
    }

    const phoneNumberRegex= /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if(formData.phone.match(phoneNumberRegex )){
      alert("Invalid Phone Number")
      return
    }
    



    const form =  document.getElementById("form")
    form.submit()
    };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='main-content'>
      <h1>Registration Form</h1>
      <form id='form' className='main-form' method='GET' action='./' onSubmit={submissionHandler}>
      <span>
          <label className='input-label'>Name:</label>
          <input
            type='text'
            name='name'
            className='input-box'
            value={formData.name}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Email: </label>
          <input
            type='email'
            name='email'
            className='input-box'
            value={formData.email}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Username: </label>
          <input
            type='text'
            name='username'
            className='input-box'
            value={formData.username}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Password: </label>
          <input
            type='password'
            name='password'
            className='input-box'
            value={formData.password}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Confirm Password: </label>
          <input
            type='password'
            name='confirmPassword'
            className='input-box'
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Date of Birth: </label>
          <input
            type='date'
            name='dob'
            className='input-box date'
            value={formData.dob}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Gender: </label>
          <input
            type='text'
            name='gender'
            className='input-box'
            value={formData.gender}
            onChange={handleInputChange}
          />
        </span>
        <span>
          <label className='input-label'>Phone Number: </label>
          <input
            type='number'
            name='phone'
            className='input-box'
            value={formData.phone}
            onChange={handleInputChange}
          />
        </span>
        <span>
        <span> <input type='submit' id='submitbtn' name='submitbtn' className='submit-btn' ></input></span>
        </span>
      </form>
    </div>
  );
}

export default Login;