import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div
      className="flex gap-1 cursor-pointer px-5 justify-center"
    >
      <Image
        src="/logo.jpg"
        alt="logo image"
        className="rounded-full w-8 h-8 border-2 border-red-500 cover"
        width={0}
        height={0}
      />
      <div
        className="font-bold text-2xl"
      >
        Tri<span className="text-red-500">citie.</span>
      </div>
    </div>
  )
}

export default Logo