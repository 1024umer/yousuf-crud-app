import axios from 'axios'
import {React,useEffect,useState} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
function UpdateUser() {
    const [firstName,setfirstName] = useState()
    const [lastName,setlastName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [phone,setPhone] = useState()
    const [country,setCountry] = useState()
    const [city,setCity] = useState()

    const navigate = useNavigate();
    const {id} =  useParams()
    
    useEffect(()=>{
        axios.get('http://localhost:3001/get-user/'+id)
        .then(result => {
            setfirstName(result.data.firstName)
            setlastName(result.data.lastName)
            setEmail(result.data.email)
            setAge(result.data.age)
            setPhone(result.data.phone)
            setCountry(result.data.country)
            setCity(result.data.city)
        })
        .catch(error => console.log(error))
    },[]);
    const Update = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/update-user/'+id,{firstName,lastName,email,age,phone,country,city})
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
                <form onSubmit={Update}>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter First Name'
                                value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter Last Name'
                                value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="email" className='form-control' placeholder='Enter Email'
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="number" className='form-control' placeholder='Enter Phone Number'
                                value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="number" className='form-control' placeholder='Enter Age'
                                value={age} onChange={(e) => setAge(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Enter Country'
                                value={country} onChange={(e) => setCountry(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='City'
                                value={city} onChange={(e) => setCity(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default UpdateUser