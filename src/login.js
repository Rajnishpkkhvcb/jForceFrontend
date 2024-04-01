import React from "react";

export default function LoginPage(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary form validation or authentication here

    // Redirect to '/todo' route using window.location.href
    window.location.href = '/todo';
  };

  return (
    <div
      className="Auth-form-container"
      style={{
        width: "300px",
        height: "400px",
        marginTop: "100px",
        marginLeft: "500px",
      }}
    >
      <form className="Auth-form" onSubmit={handleSubmit}>
        {/* <h1 style={{ marginTop: "-50px", color: "yellow" }}>TODOs</h1> */}
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ background: "#FEBE10" }}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
