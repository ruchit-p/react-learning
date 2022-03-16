import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center text-white
          justify-content-center order-2 form"
          >
            <h1 className="display-4">Hello!</h1>
            <p className="lead">Enter Your Details To Register</p>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Register</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input type="name" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I Agree to Terms and Conditions
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register