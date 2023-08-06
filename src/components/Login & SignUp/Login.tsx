

const Login = () => {
  return (
     <div className='flex flex-col gap-2 justify-center items-center bg-gray-400 p-8'>
      <p className='text-3xl'>ChetChat Messenger</p>
      <p className='text-lg pb-2'>Log in to your account</p>
      <div className='flex flex-col gap-2'>
      <input
        id='userMail'
        type='text'
        placeholder='Email or Username'
      />
      <input
        id='password'
        type='password'
        placeholder='Password'
      />
      </div>
        <button>Log in</button>

      <p className='text-sm py-2'>
        Don't have an account?
        <span
          className='hover:underline ml-1 cursor-pointer'>
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default Login