import {Outlet} from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-background text-white">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;