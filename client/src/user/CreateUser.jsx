import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [firstName,setfirstName] = useState()
    const [lastName,setlastName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [phone,setPhone] = useState()
    const [country,setCountry] = useState()
    const [city,setCity] = useState()

    const navigate = useNavigate();

    const Submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/create-user',{firstName,lastName,email,age,phone,country,city})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

  return (
        <section className='container my-5'>
            <div className="row">
                <div className="col-md-10">
                    <h3 className='text-left'>Create Users</h3>
                </div>
            </div>
            <div>
                <form onSubmit={Submit}>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter First Name'
                                onChange={(e) => setfirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter Last Name'
                                onChange={(e) => setlastName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="email" className='form-control' placeholder='Enter Email'
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="number" className='form-control' placeholder='Enter Phone Number'
                                onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="number" className='form-control' placeholder='Enter Age'
                                onChange={(e) => setAge(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter Country'
                                onChange={(e) => setCountry(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='City'
                                onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateUser