import React from 'react'

type ButtonProps = {
    bgColor: string
    color: string
    fontSize: string
    text: string
    borderRadius: string
}

const Button = (props: ButtonProps) => {
  return (
    <button
        type="submit"
        className={`bg-${props.bgColor} text-${props.color} rounded-${props.borderRadius} text-${props.fontSize} py-2 px-10 font-semibold hover:bg-red-900 mb-10 transition-all duration-300`}
    >
        {props.text}
    </button>
  )
}

export default Button