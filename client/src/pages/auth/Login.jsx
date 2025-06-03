import React, { useState } from 'react'
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Link } from 'react-router'
import { Send } from "lucide-react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    for (let [key, value] of formData.entries()) {
      console.log(`${key} = ${value}`)
    }
  }

  return (
    <div className='p-5 lg:p-7 bg-white rounded-xl shadow-200 w-2xl'>
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