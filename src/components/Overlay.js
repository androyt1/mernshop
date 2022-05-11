import React from 'react'

const Overlay = ({operCart,show}) => {
  return (
    <div className= {`w-full  h-[calc(100vh-60px)] bg-[#2629b4a2]  top-[60px] left-0 transition-all duration-700 ease-linear  fixed ${show ? 'translate-y-0 ':' translate-y-[1000px] '} ${operCart ? ' ':' ' } `}>

    </div>
  )
}

export default Overlay