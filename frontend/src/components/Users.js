import React, {useState, useEffect} from 'react'

const API = process.env.REACT_APP_API

export const Users = () => {
    
    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    const [users, setUsers] = useState([])

    const handleSubmit = async (e) => {   
        e.preventDefault();
        const res = await fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    name,
                    email,
                    password
            })
        })
        const data = await res.json()
        console.log(data)
    }

    const getUsers = async () => {
        const res =  await  fetch('http://localhost:5000/users');
        const data = await res.json();
        setUsers(data)
    }

    useEffect( () => {
        getUsers()
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    
                    <div className="form-group">
                        <input
                            type="text" 
                            onChange={e => setName(e.target.value)}
                            value={name} 
                            className="form-control"
                            placeholder="Name"
                            autoFocus
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="text" 
                            onChange={e => setEmail(e.target.value)}
                            value={email} 
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password" 
                            onChange={e => setPassword(e.target.value)}
                            value={password} 
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>

                    <button className="btn btn-primary btn-block">
                        Create
                    </button>
                </form>
            </div>
            <div className="col md-8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )   
}