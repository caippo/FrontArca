import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const notify = () => toast.error('Login non valido');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            notify()
            console.log("sonoo qui")
        }
        else {
            navigate('/home')
        }
    }

    return (
        <>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <div style={{ maxWidth: '600px', margin: 'auto', padding: '100px' }}>
                <form onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <center><button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button></center>
                </form>
            </div>
        </>
    );
}
export default Login;