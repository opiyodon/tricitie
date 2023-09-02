import React from 'react'
import Logo from './Logo';
import Link from 'next/link'

const links = ["Home", "About" , <Logo /> , "Services" , "Contact"];

function Header() {
  return (
    <nav
        className="bg-gray-900 text-white flex justify-center items-center h-20 py-4 px-6"
    >
        <ul
            className="flex gap-6 list-none"
        >
            {links.map((link) => (
                <li key={link}>
                    <a
                        href="#"
                        className="text-white font-semibold hover:text-red-500 transition-all duration-300"
                    >{ link }</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Header