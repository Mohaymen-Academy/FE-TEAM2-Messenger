import React from 'react'

const SignUp = () => {
  return (
      <div className='flex flex-col gap-2 justify-center items-center bg-gray-400 p-8'>

      <p className='text-3xl'>Team 3 Messenger</p>
      <p className='text-xl'>Create an account</p>
      <div className='flex flex-col gap-2'>
      <input
        id='email'
        type='email'
        placeholder='Email'
      />
      <input
        id='username'
        placeholder='Username'
      />
      <input
        id='password'
        type='password'
        placeholder='Password'
      />
      </div>
      
      <button>Sign Up</button>
      <p className='text-4xl py-2'>OR</p>
      
      <button>Sign Up With Google</button>
      <p className='text-sm py-2'>
        Already have an account?
        <span
          className='hover:underline ml-1 cursor-pointer'>
          Log in
        </span>
      </p>
    </div>
  )
}

export default SignUp