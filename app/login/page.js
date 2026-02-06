import React from 'react'
import Login from '@/components/login/page'
export const metadata = {
  title: "Login - Ritam Legal",
  description: "Access your Ritam Legal account to manage your cases, explore legal resources, and stay updated. Log in securely to continue.",
};


const page = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default page
