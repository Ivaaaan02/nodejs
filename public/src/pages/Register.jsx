import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };
    const handleChange = (event) => {};

    return (
    <>
        <FormContainer >
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <img src="" alt="" />
                    <h1>Ivan's Chat App</h1>
                </div>
                <input
                    type="text"
                    placeholder="Enter your Username"
                    name="username"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="password"
                    placeholder="Enter your Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="password"
                    placeholder="Confirm your Password"
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <button type="submit">Create Account</button>
            <span>Already have an Account? <Link to="/login">Login</Link>
            </span>
        </FormContainer>
    </>
    );
}

const FormContainer = styled.div``;

export default Register;