import React from 'react'
import Link from 'next/link'
import './admin_header.css'
const admin_header = () => {
  return (
    <div className='admin_header'>
      <ul>
        <li>
            <Link href="/blog_dashboard">Manage Blogs</Link>
        </li>
        <li>
            <Link href="/linkedin_post">LinkedIn Posts</Link>
        </li>
      </ul>
    </div>
  )
}

export default admin_header
