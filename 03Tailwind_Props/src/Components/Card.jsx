/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Card = ({name,btnText="Default"}) => {
    
  return (

    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://as1.ftcdn.net/v2/jpg/01/74/21/08/1000_F_174210895_uiy8rcFJqTKP3owkEilpjTNEy9P3zS4j.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{name}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || "Default Text"} →
    </button>
  </div>
</div>
  )
}


export default Card
