import React from 'react'
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import reactFireBaseApp from '../../firebase/firebase.init';

export default function Login() {
    reactFireBaseApp()
    const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();



const googleLoginHandeler = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorMessage = error.message;
        console.log(errorMessage);
    });
}










    return (
         <div className="d-flex justify-content-center align-items-center bg-primary" style={{height:"42.8rem"}}>
         <div className="card w-50">
                <div className="card-body">
                <form className="p-5">
             <h3 className="text-center">Login Your Account</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className=" d-flex flex-column justify-content-center align-items-center my-3  ">
                        <p className="">Login With</p>
                      <div className="fs-1 d-flex w-50 justify-content-between align-items-center">
                        <i className="fab fa-google" onClick={googleLoginHandeler}></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-facebook"></i>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
