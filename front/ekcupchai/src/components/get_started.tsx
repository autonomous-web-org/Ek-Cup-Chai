import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fixed incorrect import
import { motion } from "framer-motion";
import "./getstarted.css";

const GetStarted: React.FC = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", mobile: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Sign-up successful!");
    };

    return (
        <motion.div 
            className="signup-container" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Full Name" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    className="signup-input"
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="signup-input"
                    required
                />
                <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile Number" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                    className="signup-input"
                    required
                />
                <motion.button 
                    type="submit" 
                    className="signup-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Sign Up
                </motion.button>
            </form>
            
            <p className="signup-footer">
                Already have an account? <Link to="/home" className="signup-link">Go to Home</Link>
            </p>
        </motion.div>
    );
};

export default GetStarted;
