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
  const [resMessage, setresMessage] = useState("");
  const [endPreocess, setendPreocess] = useState(false)
  const { login, settoken } = useAuth();

  const handleForm = (e) => {
    setloading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    seterrorMessage("")

    const postData = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", formData);
        login(response.data.data)
        setresMessage(response.data.message)
        settoken(response.data.data.token)

        setTimeout(() => {
          navgate('/', { replace: true });
        }, 2000);
      } catch (err) {
        console.error('Registration failed:', err.response?.data || err.message);
        seterrorMessage(err.response?.data?.message || "Login failed.");
      } finally {
        setloading(false);
        setendPreocess(true);
      }
    }
    postData();
  }

  useEffect(() => {
    setTimeout(() => {
      setendPreocess(false)
    }, 1500);
  }, [endPreocess])

  return (
    <div className='p-5 lg:p-7 bg-white rounded-xl shadow-200 w-2xl'>
      {endPreocess && (
        <Popup
          title={resMessage}
          image="/assets/images/blue-check.svg"
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
            <p className="text-red-200 font-recursive text-base text-center my-1">
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