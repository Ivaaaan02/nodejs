import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
function Register() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const toastOptions= {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log("in validation", registerRoute);
            const { password, confirmPassword, username, email } = values;
            const {data} = await axios.post(registerRoute, {
                    username,
                    email,
                    password,
                });
        }
    };

const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
        toast.error("Password and Confirm Password should be the same.", 
        toastOptions
        );
        return false;
    } else if (username.length < 3) {
        toast.error("Username should be more than 3 characters.", toastOptions);
        return false;
    }else if (password.length < 8) {
        toast.error("Password should be more than 8 characters.", toastOptions);
        return false;
    }else if (email === "") {
        toast.error("Email is required.", toastOptions);
        return false;
    }
    return true;
};

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    return (
    <>
        <FormContainer >
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <img src={Logo} alt="Logo" />
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
            <button type="submit">Create Account</button>
            <span>
                Already have an Account? <Link to="/login">Login</Link>
            </span>
        </form>
        </FormContainer>
        <ToastContainer />
    </>
    );
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: black;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid white;
            border-radius: 0.4rem;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid white;
                outline: none;
            }
        }
        button {
            background-color: white;
            color: black;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.5s ease-in-out;
            &:hover {
                background-color: grey;
            }
        }
        span {
            color: white;
            text-transform: uppercase;
            text-align: center;
            a {
                color: white;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`;

export default Register;