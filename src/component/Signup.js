import React, { useRef, useState } from 'react'
import Validate from '../utils/Validate'

const Signup = () => {
    
  const [isSignin,setisSignin]=useState(false);
  const [messege,setMessege]=useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const toggeler=()=>{
       return (setisSignin(!isSignin));
   } 
  
  const check=(email,password)=>{
       
        setMessege(Validate(email,password))
  }


  return (
    <div >
       <img className='absolute h-full w-full '  src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background2" />
       <form className='' onSubmit={(e)=>e.preventDefault()}>
     <div className='absolute w-3/12 bg-black my-36 text-white mx-auto  left-0 right-0 p-5 rounded-lg bg-opacity-80'>

     <h1 className='text-4xl z-10 p-2 my-4'>{isSignin? 'Sign up':'Sign in'}</h1>
     {isSignin&& <input className='w-full p-3 my-4 bg-gray-700 rounded-lg' type="text" placeholder='Full Name' />}
     <input ref={email} className='w-full p-3 my-4 bg-gray-700 rounded-lg' type="email" placeholder='Email Address' />
     <input ref={password} className='w-full p-3 my-4 bg-gray-700 rounded-lg'  type="password" placeholder='Password' />
     <button className='w-full p-3 my-4 bg-red-800 rounded-lg' onClick={()=>{check(email.current.value,password.current.value)}}>Submit</button>
     <p className='my-3 text-red-700 font-bold'>{messege}</p>
     <p className='my-4 cursor-pointer'  onClick={()=>{toggeler()}}>{ isSignin? 'Already a member? sign in':'  New member? sign up here'}</p>

     </div>
       </form>
    </div>
  )
}

export default Signup;