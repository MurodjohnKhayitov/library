import React, { useState } from 'react'

function Input({ label, state, setstate, type = "text" }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='capitalize' htmlFor={label}>  {label}</label>
            <input
                className="px-4 rounded-lg   border border-[#a1a1a1] outline-none !bg-white  w-full h-[42px] text-[14px]        "
                type={type}
                value={state}
                onChange={(e) => setstate(e.target.value)}
                name={label}
                id={label}
                placeholder={label} />
        </div>)
}

export default Input