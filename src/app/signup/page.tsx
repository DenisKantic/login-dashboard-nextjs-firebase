"use client"
import React from 'react'
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app  from '../firebaseConfig';


const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e: any) =>{
    e.preventDefault();

      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // Signed up 
          alert("signed in")
          setPassword("")
          setEmail("")
          setConfirmPassword("");
          e.clear()
          // ...
        })
        .catch(error => {
          console.log("error", error)
          // ..
        });
   
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <form
      onSubmit={handleSubmit}
      className='w-[30%] min-h-[50vh] bg-gray-400 rounded-xl'
      >
        <h1 className='text-4xl font-bold text-center p-10'>Sign Up</h1>

          <div className='p-10 w-full flex flex-col'>
               <label className='text-xl'>Email:</label> 
               <input 
               type="text" 
               placeholder='Enter your email' 
               className='w-full py-3 p-5 mt-2 mb-5 rounded-xl outline-1 focus:outline-green-400'
               onChange={(e)=>setEmail(e.target.value)}
               />
               <label className='text-xl'>Password:</label> 
               <input 
               type="password" 
               placeholder='Enter your password' 
               className='w-full py-3 p-5 mb-5 mt-2 rounded-xl outline-1 focus:outline-green-400'
               onChange={(e)=>setPassword(e.target.value)}
               />

              <label className='text-xl'>Confirm your password:</label> 
               <input 
               type="password" 
               placeholder='Confirm your password' 
               className='w-full py-3 p-5 rounded-xl mt-2 outline-1 focus:outline-green-400'
               onChange={(e)=>setConfirmPassword(e.target.value)}
               />
               <br />

               <button 
               type='submit'
               className='px-4 py-3 bg-orange-400 rounded-xl hover:bg-red-300'
               >
                Create an account
               </button>
          </div>
      </form>
    </div>
  )
}

export default SignUp