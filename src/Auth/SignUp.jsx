import React, { useState } from 'react';
import cropImg from '../images/paddy-field.jpg';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Logic for handling sign-up can be added here
        console.log('Signing up with', { email, password, agreeTerms });
    };

    return (
        <div className="relative dark:bg-stone-800 p-2" style={{minHeight: 'calc(100vh - 75px)'}}>
            {/* Background Image */}
            <img
                src={cropImg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 transition-opacity duration-100 ease-in-out"
            />

            {/* Form Container */}
            <div className="relative bg-gradient-to-br flex items-center justify-center mx-2">
                <div className="relative z-10 flex flex-col gap-5 items-center justify-center bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-md">
                    {/* Header */}
                    <div className="flex flex-row items-center justify-center from-purple-100 via-purple-200 to-purple-300 dark:from-stone-600 dark:via-stone-700 dark:to-stone-800 bg-gradient-to-r rounded-t-lg px-5 py-4 gap-2 w-full">
                        <img src={logo} alt="AgroHealth" className="w-11" />
                        <h2 className="text-2xl font-semibold text-black dark:text-white">
                            AgroHealth
                        </h2>
                    </div>

                    {/* Title */}
                    <div className="text-xl font-bold text-black dark:text-gray-200">
                        Create your account
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4 px-8">
                        {/* Username Input */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-sm font-medium text-black dark:text-white">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="p-2 rounded-lg bg-white dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="yourname"
                                required
                            />
                        </div>
                        {/* Email Input */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 rounded-lg bg-white dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-medium text-black dark:text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 rounded-lg bg-white dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-black dark:text-white">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="p-2 rounded-lg bg-white dark:bg-stone-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        {/* Agree to Terms */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                checked={agreeTerms}
                                onChange={() => setAgreeTerms(!agreeTerms)}
                                className={`h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-stone-400 checked:bg-purple-600 dark:checked:bg-purple-500 checked:border-transparent appearance-none cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-gray-400
        transition-colors duration-300 ease-in-out
        `}
                            />
                            <label htmlFor="agreeTerms" className="text-sm font-medium text-black dark:text-white">
                                I agree to the terms and conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-sm text-center mt-1 pb-3 text-black dark:text-gray-100">
                        Already have an account?{" "}
                        <Link to='/auth/signin' className="text-purple-600 dark:text-purple-400 hover:underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;