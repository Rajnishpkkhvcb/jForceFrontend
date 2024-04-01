
import React from "react"

export default function (props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary form validation or authentication here
    
        // Redirect to '/todo' route using window.location.href
        window.location.href = '/todo';
      };
    
  return (
    <div className="Auth-form-container" style={{ width: '300px', height: '400px',marginTop:'100px',marginLeft:'500px' }}>
      <form className="Auth-form">
        <div className="Auth-form-content">
            {/* <h1 style={{marginTop:"-50px",color:"yellow"}}>TODOs</h1> */}
          <h3 className="Auth-form-title">Registration</h3>
          <div className="form-group mt-3">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Name</label> */}
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Enter your name"
            />
          </div><div className="form-group mt-3">
            {/* <label>Contact No</label> */}
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            {/* <label>Confirm Password</label> */}
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" style={{background:"#FEBE10",border:"none"}}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
