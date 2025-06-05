import React, { useState, useRef, useEffect } from 'react'
import { User, Upload, Trash2, Send } from "lucide-react";
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../contexts/shared/Auth';
import Popup from '../../components/Popup';
import handleFileUpload from '../../utils/upload';
import Spinear from '../../components/loaders/Spinear';
import axiosInstance from '../../utils/axiosInstance';

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileUploadRef = useRef(null);
  const { login, settoken, setauthoed } = useAuth();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageData, setUploadedImageData] = useState(null);

  // Response state
  const [errorMessage, setErrorMessage] = useState("");
  const [responseData, setResponseData] = useState("");
  const [showProcessResult, setShowProcessResult] = useState(false);

  const handleLoginSuccess = (data) => {
    login(data.data);
    settoken(data.token);
    setResponseData(data);
  }

  const triggerFileUpload = () => {
    fileUploadRef.current.click();
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setSelectedImage(file);
    }
  }

  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl(null);
    // Clean up the object URL to prevent memory leaks
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }
  }

  const handleImageButtonClick = () => {
    selectedImage ? removeSelectedImage() : triggerFileUpload();
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  const validateForm = () => {
    setErrorMessage("");

    if (!userEmail || !userPassword || !userName || !userBirthDate) {
      setErrorMessage("All user data are required");
      return false;
    }

    if (userPassword.length < 6) {
      setErrorMessage("Password should be more than 6 characters");
      return false;
    }

    if (!validateEmail(userEmail)) {
      setErrorMessage("Please enter a valid email");
      return false;
    }

    if (userName.length < 5) {
      setErrorMessage("Name should be more than 5 characters");
      return false;
    }

    const age = calculateAge(userBirthDate);
    if (age < 18) {
      setErrorMessage("Age must be 18 or older");
      return false;
    }

    return true;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setShowProcessResult(false);

    // Upload image if selected
    if (selectedImage) {
      const uploadResponse = await handleFileUpload(selectedImage);
      setUploadedImageData({
        url: uploadResponse.url,
        name: uploadResponse.name
      });
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("name", userName.trim());
    formData.append("email", userEmail.trim());
    formData.append("password", userPassword.trim());
    formData.append("birth_day", new Date(userBirthDate).toISOString());

    if (uploadedImageData) {
      formData.append("image", uploadedImageData.url);
    }

    try {
      const response = await axiosInstance.post("/auth/sign-in", formData);
      handleLoginSuccess(response.data);

      setTimeout(() => {
        const targetPath = response.data.data.role === "admin" ? '/admin' : '/';

        if (response.status >= 200 && response.status < 300) {
          navigate(targetPath, { replace: true });
        }
        setauthoed(true);
      }, 1700);

    } catch (error) {
      console.error('Registration failed:', error.response?.data.message || error.message);
      setResponseData(error.response?.data || { message: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
      setShowProcessResult(true);
    }
  }

  useEffect(() => {
    if (!showProcessResult) return;

    const timer = setTimeout(() => {
      setShowProcessResult(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showProcessResult]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  return (
    <div className='p-5 lg:p-7 bg-white rounded-xl shadow-200 w-2xl'>
      {showProcessResult && (
        <Popup
          message={responseData.message}
          code={responseData.stateCode}
        />
      )}

      {isLoading && (
        <div className="size-full absolute top-0 left-0 bg-black/40 z-40 center">
          <Spinear />
        </div>
      )}

      <div className="w-full border-b pb-4 border-ligh-50">
        <h1 className='text-2xl main-gradient special w-fit'>Create an Account</h1>
        <p className='text-ligh-200 text-sm font-karla'>{"< "}Join us today by entering your details below{" />"}</p>
      </div>

      <form className="mt-4" onSubmit={handleFormSubmit}>
        <div className="w-full">
          <div className="mx-auto w-fit">
            {!selectedImage ? (
              <div
                className="size-12 center bg-primary-100/20 rounded-full text-primary-100 relative cursor-pointer active:bg-primary-100/30 duration-200"
                onClick={handleImageButtonClick}
              >
                <User size={19} />
                <button
                  type="button"
                  className="absolute text-white -right-1 -bottom-0 size-5 center bg-primary-300 rounded-full cursor-pointer"
                >
                  <Upload size={11} />
                </button>
              </div>
            ) : (
              <div className="size-12 ring-primary-200 ring-2 rounded-full relative">
                <img
                  src={imagePreviewUrl}
                  alt="Profile preview"
                  className="size-full rounded-full object-cover cursor-pointer"
                  onClick={triggerFileUpload}
                />
                <button
                  type="button"
                  className="absolute text-white -right-1 -bottom-0.5 size-5 center bg-red-200 rounded-full cursor-pointer"
                  onClick={removeSelectedImage}
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
              ref={fileUploadRef}
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>

          <div className="my-4 grid sm:grid-cols-2 gap-2">
            <InputField
              title="name"
              placeholder="Enter your name"
              value={userName}
              onchange={(val) => setUserName(val)}
            />
            <InputField
              title="email"
              placeholder="Enter your email"
              type='email'
              value={userEmail}
              onchange={(val) => setUserEmail(val)}
            />
            <InputField
              title="password"
              placeholder="Enter your password"
              type='password'
              value={userPassword}
              onchange={(val) => setUserPassword(val)}
            />
            <InputField
              title="birth-day"
              placeholder="Enter your birth date"
              type='date'
              value={userBirthDate}
              onchange={(val) => setUserBirthDate(val)}
            />
          </div>

          <div className="w-full">
            <Button
              title="Sign Up"
              type="submit"
              leftIcon={<Send size={17} />}
              classContainer="flex-center gap-2 center w-full bg-primary-200 rounded-lg text-white hover:bg-primary-100 py-3"
            />

            {errorMessage && (
              <p className="text-red-200 text-xs bg-red-200/20 p-1 font-recursive text-center my-1 duration-200">
                {errorMessage}
              </p>
            )}

            <p className="font-karla mt-2.5 px-1 text-dark-200 font-semibold text-sm">
              Already have an account?
              <Link to="/auth/login" className='text-primary-100 ml-1 hover:underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp