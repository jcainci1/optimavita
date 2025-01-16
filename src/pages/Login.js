import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password validation logic
  const validatePassword = (password) => {
    const minLength = 8;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return password.length >= minLength && regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and contain both letters and numbers."
      );
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate a successful login (You can replace this with an API call)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Login successful!");
    }, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".login-container")) {
        setError(""); // Clear error if click is outside the form
      }
    };

    // Set a timeout to clear the error after 10 seconds
    const errorTimeout = setTimeout(() => {
      setError("");
    }, 10000); // 10 seconds

    // Add event listener for clicks outside the form
    document.addEventListener("click", handleClickOutside);

    // Cleanup: Remove event listener and clear timeout when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
      clearTimeout(errorTimeout);
    };
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div className={classes.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            placeholder="Enter your email"
          />
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.input}
            placeholder="Enter your password"
          />
        </div>

        <div className={classes.errorContainer}>
          {error && <p className={classes.error}>{error}</p>}
        </div>

        <button
          type="submit"
          className={classes.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
