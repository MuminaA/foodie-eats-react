import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillFacebook } from "react-icons/ai";

function Signup() {
  const [valid, setValid] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
      setValid(e.target.valid);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if(!valid) {
      setError("Please enter a phone number or email");
      return;
    }

    // Do something with the entered email/phone number
    console.log(valid);

    // Clear input value and error message
    setValid("");
    setError("");
  }

  return (
    <div>
      <nav className="bg-black w-full h-[64px] text-white flex items-center md:px-16 mobile:px-8 font-Mulish">
        <h1 className="text-2xl gap-[.3rem] font-medium flex">
          Foodie <span className="text-green-500 font-extra-bolded">Eats</span>
        </h1>
      </nav>
      <form className="min-h-[85vh] grid place-content-center">
        <div className="max-w-[350px] mx-auto flex flex-col justify-center gap-12 px-3">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[1.50rem]">
                What's your phone number or email?
              </p>
            </div>
            <div className="mb-2">
                <input
                type='text'
                  placeholder="Enter phone number or email"
                  className="py-3 pl-4 bg-zinc-200 w-full rounded-lg placeholder:text-lg placeholder:text-zinc-500"
                  onChange={handleChange}
                ></input>
             {error && <p id="emil-error" className="text-red-600 text-sm pt-2">{error}</p>}
            </div>
            <div className="">
              <button
                className="bg-black text-white w-full p-3 rounded-lg"
                onClick={handleClick}
              >
                Continue
              </button>
            </div>
            <p className="w-full text-center border-b-[1px] border-[#AFAFAF] border-solid leading-[.1rem] my-[10px]">
              <span className="bg-white p-[10px] text-[#AFAFAF] text-[13px]">
                or
              </span>
            </p>
            <div>
              <button className="bg-zinc-200 w-full p-3 rounded-lg flex items-center gap-1 justify-center">
                <FcGoogle size={25} />
                Continue with Google
              </button>
            </div>
            <div>
              <button className="bg-zinc-200 w-full p-3 rounded-lg flex items-center gap-1 justify-center">
                <AiFillApple size={25} />
                Continue with Apple
              </button>
            </div>
            <div>
              <button className="bg-zinc-200 w-full p-3 rounded-lg flex items-center gap-1 justify-center">
                <AiFillFacebook size={25} />
                Continue with Facebook
              </button>
            </div>
            <div className="max-w-[300px] pt-2">
              <p className="text-xs text-gray-500 leading-5">
                By proceeding, you consent to get calls, WhatsApp or SMS
                messages, including by automated dialer, from Foodie and its
                affiliates to the number provided. Text “STOP” to 01234 to opt
                out.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 leading-5">
              This site is protected by reCAPTCHA and the Google
              <a href="#" className="underline text-black">
                Privacy Policy
              </a>
              and
              <a href="#" className="underline text-black">
                Terms of Service
              </a>
              apply.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
