import React, { useState, useRef } from 'react'
import { User, Upload, Trash2, Send } from "lucide-react";
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Link } from 'react-router'

const Sign = () => {
  const [image, setimage] = useState(null);
  const uploadRef = useRef(null);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [birthDay, setbirthDay] = useState("");

  const upload = () => {
    uploadRef.current.click()
  }
  const uploadeImg = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file);
    setimage(url);
  }
  const deleteImg = () => {
    setimage(null);
  }

  const clickFunc = () => {
    image ? deleteImg() : upload()
  }

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("birthDay", new Date(birthDay).toISOString());
    formData.append("image", image);

    for (let [key, value] of formData.entries()) {
      console.log(`${key} = ${value}`)
    }
    setemail("")
    setname("")
    setpassword("")
    setbirthDay("")
    setimage(null);
  }

  const delBtn = "absolute text-white -right-1 -bottom-0.5 size-5 center bg-red-200 rounded-full cursor-pointer";
  const upBtn = "absolute text-white -right-1 -bottom-0 size-5 center bg-primary-300 rounded-full cursor-pointer"

  return (
    <div className='p-5 lg:p-7 bg-white rounded-xl shadow-200 w-2xl'>
      <>
        <div className="w-full border-b pb-4 border-ligh-50">
          <h1 className='text-2xl main-gradient special w-fit'>Create an Acount </h1>
          <p className='text-ligh-200 text-sm font-karla'> {"< "}Join us today by entering your details below {" />"}</p>
        </div>

        <form
          className="mt-4"
          onSubmit={submitForm}
        >
          <div className="w-full">
            <div className="mx-auto w-fit">
              {!image ? (
                <div
                  className="size-12 center bg-primary-100/20 rounded-full text-primary-100 relative cursor-pointer active:bg-primary-100/30 duration-200"
                  onClick={clickFunc}
                >
                  <User size={19} />

                  <button className={upBtn}>
                    <Upload size={11} />
                  </button>
                </div>) : (
                <div className="size-12 ring-primary-200 ring-2 rounded-full relative">
                  <img
                    src={image}
                    alt="image"
                    className="size-full rounded-full object-cover cursor-pointer"
                    onClick={upload}
                  />
                  <button
                    className={delBtn}
                    onClick={deleteImg}
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
              <input
                type="file"
                name="image"
                id="image"
                hidden
                ref={uploadRef}
                onChange={uploadeImg}
              />
            </div>

            <div className="my-4 grid sm:grid-cols-2 gap-2">
              <InputField title="name" placeholder="enter your name" value={name} onchange={(val) => setname(val)} />
              <InputField title="email" placeholder="enter your email" type='email' value={email} onchange={(val) => setemail(val)} />
              <InputField title="password" placeholder="enter your password" type='password' value={password} onchange={(val) => setpassword(val)} />
              <InputField title="birth-day" placeholder="enter your birth day" type='date' value={birthDay} onchange={(val) => setbirthDay(val)} />
            </div>

            <div className="w-full">
              <Button
                title="Sign in"
                type="submit"
                leftIcon={<Send size={17} />}
                classContainer="flex-center gap-2 center w-full bg-primary-200 rounded-lg text-white hover:bg-primary-100 py-3"
              />

              <p className="font-karla mt-2.5 px-1 text-dark-200 font-semibold text-sm">
                Already have an account ?
                <Link to="login" className='text-primary-100 ml-1'>Login</Link>
              </p>
            </div>
          </div>
        </form>
      </>
    </div>
  )
}

export default Sign