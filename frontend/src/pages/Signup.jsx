import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import TextLevelBtn from "../components/TextLevelBtn"

const Signup = () => {

  const nevigate = useNavigate();

  // State
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Event handlers
  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handelClick = (e) => {
    e.preventDefault();

    // validation
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    // Send a POST request
    axios.post("http://localhost:3000/api/v1/user/signup", formData)
      .then((res) => {
        console.log(res.data);
        // Save the token in the local storage
        localStorage.setItem("token", res.data.token);
        // Redirect to the dashboard
        nevigate("/dashboard");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  // Function to validate the form
  const validateForm = () => {
    const errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = "First name is required";
    } else if (formData.firstname.length < 3) {
      errors.firstname = "First name must be at least 3 characters";
    } else if (formData.firstname.length > 30) {
      errors.firstname = "First name must be at most 30 characters";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Last name is required";
    } else if (formData.lastname.length < 3) {
      errors.lastname = "Last name must be at least 3 characters";
    } else if (formData.lastname.length > 30) {
      errors.lastname = "Last name must be at most 30 characters";
    }

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    } else if (formData.username.length > 30) {
      errors.username = "Username must be at most 30 characters";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.username)) {
      errors.username = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (formData.password.length > 30) {
      errors.password = "Password must be at most 30 characters";
    }
    return errors;
  }

  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-3/12 h-fit p-6 rounded-sm drop-shadow-sm">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox onChange={handelChange} error={errors.firstname} name={"firstname"} label="First Name" placeholder="Enter your first name" />
        <InputBox onChange={handelChange} error={errors.lastname} name={"lastname"} label="Last Name" placeholder="Enter your last name" />
        <InputBox onChange={handelChange} error={errors.username} name={"username"} label="Email" placeholder="Enter your email" />
        <InputBox onChange={handelChange} error={errors.password} name={"password"} label="Password" placeholder="Enter your password" />
        <Button onClick={handelClick} label="Sign Up" />
        <TextLevelBtn text="Already have an account? " label="Sign In" to="/signin" />
      </div>
    </div>
  )
}

export default Signup