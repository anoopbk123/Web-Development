import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    userName:'',
    email:'',
    password:'',
    confirmPassword:'',
    term:false,
  })
  const handleInputChange = (event) => {
    const {name, value, checked, type} = event.target
    setFormData((prevData)=>{
      return{
        ...prevData,
        [name]:type === 'checkbox'?checked:value,
      }
    })
  }
  const formError = []
  const handleSubmit = (event)=>{
    event.preventDefault()
    if(Object.values(formData).includes('')){
      formError.push('fill all fields')
    }
    if(formData.password !== formData.confirmPassword){
      formError.push('confirm password is not matching password')
    }
    if(!formData.term) formError.push('accept terms to continue')
    if(formError.length){
      alert(formError)
      formError.splice(0)
    }
    else{
      console.log(formData)
    setFormData({
      userName:'',
      email:'',
      password:'',
      confirmPassword:'',
      term:false,
    })
    }
  }

  return (
    <div className="m-1">
      <div className="m-auto sign-up-container border-rounded p-1">
        <h2 className="text-center">SignUp</h2>
        <form className="sign-up-form p-1" onSubmit={handleSubmit}>
          <div className="m-1 d-flex justify-between flex-wrap">
            <div>
              <label htmlFor="user-name">User Name</label>:
            </div>
            <div className="max-100">
              <input
                onChange={handleInputChange}
                id="user-name"
                value={formData.userName}
                type="text"
                name="userName"
                placeholder="Enter Name"
                className="input"
              />
            </div>
          </div>
          <div className="m-1 d-flex justify-between flex-wrap">
            <div>
              <label htmlFor="email">Email</label>:
            </div>
            <div className="max-100">
              <input
                onChange={handleInputChange}
                id="email"
                value={formData.email}
                type="email"
                name="email"
                placeholder="Enter email"
                className="input"
              />
            </div>
          </div>
          <div className="m-1 d-flex justify-between flex-wrap">
            <div>
              <label htmlFor="password">Password</label>:
            </div>
            <div className="max-100">
              <input
                onChange={handleInputChange}
                id="password"
                value={formData.password}
                type="password"
                name="password"
                placeholder="Enter password"
                className="input"
              />
            </div>
          </div>
          <div className="m-1 d-flex justify-between flex-wrap">
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>:
            </div>
            <div className="max-100">
              <input
                onChange={handleInputChange}
                id="confirm-password"
                value={formData.confirmPassword}
                type="password"
                name="confirmPassword"
                placeholder="Enter password again"
                className="input"
              />
            </div>
          </div>
            <div className="max-100 text-center m-1">
            <label htmlFor="term m-1">accept terms</label>:
              <input
                onChange={handleInputChange}
                id="term"
                value={formData.term}
                type="checkbox"
                checked={formData.term}
                name="term"
                className="input m-1"
              />
            </div>
          <div className="text-center">
            <button className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
