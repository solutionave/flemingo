import React from 'react'

const login = () => {
  return (
    <div className="container mt-5">
        <div className="row justify-content-evenly">
            <div className="col-md-7 col-sm-10">
                <div className="container px-5">
                    <h2>
                        You are almost there
                    </h2>
                    <p className="text-start">
                        More than 600+ content creators from youtube, 1000+ users from instagram & 2000+ users from facebook have joined till now.
                    </p>
                    <img className="mt-5 w-100" src='assets/2672290 1.svg'/>
                </div>
            </div>
            <div className="col-md-5 col-sm-10">
                <div className="container px-5">
                    <h3>
                        Login / Sign up
                    </h3>
                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1 fw-bold" className="form-label">Email or phone</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="forgetPassword" className="form-label">Forgot email? <a href="#">Find here</a></label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="Btn">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login