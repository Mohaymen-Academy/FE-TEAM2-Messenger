
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className="grid place-items-center min-h-screen">
        <Outlet/>

    </div>
  )
}

export default Auth