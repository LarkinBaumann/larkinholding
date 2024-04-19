import React from 'react'

function Button({text}) {
  return (
    <button className='w-[130px] h-[49px] px-[9px] py-[20px] text-center bg-[#022136] rounded-[7px] flex items-center justify-center border-[0.5px] border-[#1777BA] mb-[40px] z-20 cursor-pointer'>
             {text}
            </button>
  )
}

export default Button