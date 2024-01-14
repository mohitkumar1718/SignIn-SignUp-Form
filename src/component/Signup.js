import React, { useState } from 'react'


const Signup = () => {
    
  const [isSignin,setisSignin]=useState(true);
  const Toggeler=()=>{
  return (setisSignin(!isSignin));
} 



  return (
    <div>
       <img className='absolute h-full w-full '  src="https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?w=1060&t=st=1705245830~exp=1705246430~hmac=022462e81c6bcee3e5c28f3051ac41e7848edb85158ad965cf4bb817d8f26969" alt="background2" />
       <form onSubmit={(e)=>e.preventDefault()}>

     <div className='absolute w-4/12 bg-black  text-white mx-auto left-0 right-0 my-48 p-4 rounded-lg bg-opacity-80'>

     <h1 className='text-4xl z-10 p-2 my-4'>Sign in</h1>
     <input className='w-full p-3 my-4 bg-gray-700 rounded-lg' type="email" placeholder='Email Address' />
     <input className='w-full p-3 my-4 bg-gray-700 rounded-lg'  type="password" placeholder='Password' />
     <button className='w-full p-3 my-4 bg-red-800 rounded-lg'>Submit</button>
     <p className='my-4 cursor-pointer'  onClick={()=>{Toggeler()}}>New member? sign up here</p>

     </div>
       </form>
    </div>
  )
}

export default Signup;