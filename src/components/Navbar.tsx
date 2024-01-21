import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex text-white p-4 px-20 items-center">
        <h1 className="text-5xl">Reply Pal</h1>
        <div className="flex gap-8 ml-auto text-xl">
            <a href="">HOME</a>
            <a href="">PRICING</a>
            <a href="">BLOG</a>
            <a href="">CONTACT US</a>
        </div>

    </nav>
  )
}
