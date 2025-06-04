import React, { useEffect, useState } from 'react'
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Link, replace, useNavigate } from 'react-router'
import { Send } from "lucide-react";
import axiosInstance from '../../utils/axiosInstance';
import Spinear from '../../components/loaders/Spinear';
import { useAuth } from '../../contexts/shared/Auth';
import Popup from '../../components/Popup';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const navgate = useNavigate();

  // Response data
  const [resData, setresData] = useState("");
  const [endPreocess, setendPreocess] = useState(false)
  const { login, settoken, setauthoed } = useAuth();
  const loginFunc = (data) => {
    login(data.data);
    settoken(data.token);
    setresData(data);
  }

  const handleForm = (e) => {
    e.preventDefault();
    setendPreocess(false);

    const validEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    if (!email || !password) {
      seterrorMessage("email and password are required")
      return;
    } else if (password.length < 6) {
      seterrorMessage("password sholud more than 6 charachter")
      return;
    } else if (!validEmail(email)) {
      seterrorMessage("please ,enter a valid email")
      return
    };

    setloading(true)
    const formData = new FormData();
    formData.append("email", email.trim());
    formData.append("password", password.trim());
    seterrorMessage("")

    const postData = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", formData);
        loginFunc(response.data);

        setTimeout(() => {
          const targetPath = response.data.data.role === "admin" ? '/admin' : '/';
          
          if (response.status >= 200 && response.status < 300) {
            navgate(targetPath, { replace: true });
          }
          setauthoed(true);
        }, 1700);
      } catch (err) {
        console.error('Registration failed:', err.response?.data.message || err.message);
        setresData(err.response?.data || "Login failed. Please try again.")
      } finally {
        setloading(false);
        setendPreocess(true);
      }
    }
    postData();
  }

  useEffect(() => {
    if (!endPreocess) return;
    const timer = setTimeout(() => {
      setendPreocess(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [endPreocess]);


  return (
    <div className='p-5 lg:p-7 bg-white rounded-xl shadow-200 w-2xl'>
      {endPreocess && (
        <Popup
          message={resData.message}
          code={resData.stateCode}
        />
      )}

      {loading && (
        <div className="size-full absolute top-0 left-0 bg-black/40 z-40 center">
          <Spinear />
        </div>
      )}

      <div className="w-full border-b pb-4 border-ligh-50">
        <h1 className='text-2xl main-gradient special w-fit'>Welcome back </h1>
        <p className='text-ligh-200 text-sm font-karla'> {"< "}Please enter your details to login {" />"}</p>
      </div>

      <form
        className='mt-3'
        onSubmit={handleForm}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          <InputField title="email address" placeholder="enter your email" type='email' value={email} onchange={(val) => setemail(val)} />
          <InputField title="password" placeholder="enter your password" type='password' value={password} onchange={(val) => setpassword(val)} />
        </div>

        <div className="w-full mt-5">
          <Button
            title="log in"
            type="submit"
            leftIcon={<Send size={17} />}
            classContainer="flex-center gap-2 center w-full bg-primary-200 rounded-lg text-white hover:bg-primary-100 py-3"
          />

          {errorMessage && (
            <p className="text-red-200 text-xs bg-red-200/20 p-1 font-recursive text-center my-1 duration-2">
              {errorMessage}
            </p>
          )}

          <p className="font-karla mt-2.5 px-1 text-dark-200 font-semibold text-sm">
            Don't have an account ?
            <Link to="/auth/sign-in" className='text-primary-100 ml-1 hover:underline'>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login