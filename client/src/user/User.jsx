import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function User() {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(result => setUsers(result.data))
        .catch(error => console.log(error))
    })
    const  handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete-user/'+id)
        .then(result => {
            console.log(result)
            window.location.reload()
        })
        .catch(error => console.log(error))
    }
  return (
    <section className='container my-5 border p-4 rounded'>
        <div className="row">
            <div className="col-md-10">
                <h2 className='text-left'>All Users</h2>
            </div>
            <div className="col-md-2">
                <Link to="/create" className="btn btn-outline-primary">New User</Link>
            </div>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Age</th>
                    <th scope="col">Country</th>
                    <th scope="col">City</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.age}</td>
                                <td>{user.country}</td>
                                <td>{user.city}</td>
                                <td>
                                    <Link to={`update/${user._id}`} className='btn btn-primary'>Edit</Link>
                                    <button onClick={(e)=> handleDelete(user._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </section>
  )
}

export default User