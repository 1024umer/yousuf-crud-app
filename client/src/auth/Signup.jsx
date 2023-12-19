import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    const [firstName , setfirstName] = useState();
    const [lastName , setLastName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const Submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{firstName,lastName,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <section className='container '>
        <div>
            <h1>Signup</h1>
        </div>
        <div className="card p-5">
            <form onSubmit={Submit}>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label htmlFor="" className='form-label'>First Name</label>
                            <input className='form-control' onChange={(e)=> setfirstName(e.target.value)} type="text" placeholder='Please Enter Your First Name' />
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label htmlFor="" className='form-label'>Last Name</label>
                            <input className='form-control' onChange={(e)=> setLastName(e.target.value)} type="text" placeholder='Please Enter Your Last Name' />
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className='form-label'>Email Address</label>
                    <input className='form-control' onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Please Enter Your Email Address' />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className='form-label'>Password</label>
                    <input className='form-control' onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Please Enter Your Password' />
                </div>
                <button className='btn btn-primary mt-3'>SignUp</button>
                <div className='mt-5 text-center'>
                    <hr/>
                    <p>Already has an account ?</p>
                    <Link to='/login' className='btn btn-outline-success'>Login</Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Signup