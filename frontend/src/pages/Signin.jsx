import{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import TextLevelBtn from '../components/TextLevelBtn'

const Signin = () => {
  const nevigate = useNavigate();

  // state
  const [formData, setFormData] = useState({
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
    axios.post("http://localhost:3000/api/v1/user/signin", formData)
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

    if(!formData.username.trim()) {
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
        <Heading label="Sign In" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox name='username' onChange={handelChange} error={errors.username} label="Email" placeholder="Enter your email" />
        <InputBox name='password' onChange={handelChange} error={errors.password} label="Password" placeholder="Enter your password" />
        <Button  onClick={handelClick} label="Sign In" />
        <TextLevelBtn text="Don't have an account? " label="Sign Up" to="/signup" />
      </div>
    </div>
  )
}

export default Signin