"use client"
import React, { useState } from 'react';
import './index.css';
import { useRouter } from 'next/navigation'; 
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
setTimeout(() => {
    setError(null)
}, 3000);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
           if(response.status===200){
            localStorage.setItem("loggedIn",true)
            router.push('/blog_dashboard');
           }else{
            setError(data.message)
           }
        } catch (error) {
           setError(error)
            // Handle errors
        }
    };
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
        <div className='login w-full h-screen flex justify-center items-center'>
            <div className="logform">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder='Username'
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        required

                    />
                    <button type="submit">Login</button>
                    {error&& <p className='text-center'>{error}</p>}
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginPage;
