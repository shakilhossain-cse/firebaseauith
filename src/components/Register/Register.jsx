import React from 'react'



export default function Register() {


    return (
        <div className="d-flex justify-content-center align-items-center bg-danger" style={{height:"42.8rem"}}>
        <div className="card w-50">
               <div className="card-body">
               <form className="p-5">
            <h3 className="text-center">Register Your Account</h3>
                   <div className="mb-3">
                       <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                       <input  type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                       <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                       <input type="password" className="form-control" id="exampleInputPassword1"/>
                   </div>
                   <button type="submit" className="btn btn-primary w-100">Submit</button>
                   </form>
               </div>
           </div>
       </div>
    )
}
