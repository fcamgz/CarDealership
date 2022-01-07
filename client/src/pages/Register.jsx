import React, {useState} from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== rePassword){
            console.log('Passwords dont match');
            setError('Passwords dont match');
        }
        axios.post('http://localhost:5000/register', {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        .then(res => res.data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {error}
                <input onChange={(e) => setUsername(e.target.value)} name='username' type="text" placeholder='username' />
                <input onChange={(e) => setPassword(e.target.value)} name='password' type="text" placeholder='password' />
                <input onChange={(e) => setRePassword(e.target.value)} name='re-password' type="text" placeholder='re-password' />
                <input onChange={(e) => setFirstName(e.target.value)} name='firstName' type="text" placeholder='firstname' />
                <input onChange={(e) => setLastName(e.target.value)} name='lastName' type="text" placeholder='lastname' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
