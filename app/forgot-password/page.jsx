'use client';
import { useState } from 'react';
import Link from 'next/link';
import '../auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    setIsSubmitted(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Reset Password</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit" className="auth-button">
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="success-message">
            <p>Password reset link has been sent to your email.</p>
            <p>Please check your inbox and follow the instructions.</p>
          </div>
        )}
        <p className="auth-link">
          Remember your password? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}