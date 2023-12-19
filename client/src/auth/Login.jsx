import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();
    const Submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            if(result.data === 'Success'){
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <section className='container mt-5'>
        <div>
            <h1>Login</h1>
        </div>
        <div className="card p-5">
            <form onSubmit={Submit}>
                <div className="form-group mt-4">
                    <label htmlFor="" className='form-label'>Email Address</label>
                    <input onChange={(e)=> setEmail(e.target.value)} className='form-control' type="email" placeholder='Please Enter Your Email Address' />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="" className='form-label'>Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} className='form-control' type="password" placeholder='Please Enter Your Password' />
                </div>
                <button>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Login