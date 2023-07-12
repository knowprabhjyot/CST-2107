import React from 'react'
import CreateBlog from '../components/createBlog'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <CreateBlog />
    </div>
  )
}
