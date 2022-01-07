import React from 'react'

export default function Login() {

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input name='username' type="text" placeholder='username' />
                <input name='password' type="text" placeholder='password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
