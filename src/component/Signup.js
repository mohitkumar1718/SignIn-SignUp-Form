import React, { useState } from 'react'


const Signup = () => {
    
  const [isSignin,setisSignin]=useState(true);
  const toggeler=()=>{
    console.log(isSignin);
  return (setisSignin(!isSignin));
} 



  return (
    <div >
       <img className='absolute h-full w-full '  src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background2" />
       <form className='' onSubmit={(e)=>e.preventDefault()}>
     <div className='absolute w-3/12 bg-black my-36 text-white mx-auto  left-0 right-0 p-5 rounded-lg bg-opacity-80'>

     <h1 className='text-4xl z-10 p-2 my-4'>{isSignin? 'Sign up':'Sign in'}</h1>
     {isSignin&& <input className='w-full p-3 my-4 bg-gray-700 rounded-lg' type="text" placeholder='Full Name' />}
     <input className='w-full p-3 my-4 bg-gray-700 rounded-lg' type="email" placeholder='Email Address' />
     <input className='w-full p-3 my-4 bg-gray-700 rounded-lg'  type="password" placeholder='Password' />
     <button className='w-full p-3 my-4 bg-red-800 rounded-lg'>Submit</button>
     <p className='my-4 cursor-pointer'  onClick={()=>{toggeler()}}>{ isSignin? 'Already a member? sign in':'  New member? sign up here'}</p>

     </div>
       </form>
    </div>
  )
}

export default Signup;