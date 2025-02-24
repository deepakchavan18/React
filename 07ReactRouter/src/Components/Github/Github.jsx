/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([]) 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/deepakchavan18')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
            
  return (
    <div className='flex flex-col items-center  h-screen bg-gray-200'>
      <div className='w-full bg-gray-600 text-white text-center py-4 text-3xl'>
        Github Username: {data.login}
      </div>

      <div className='flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg mt-10 w-3/1'>
        <img className='rounded-full border-4 border-gray-600 w-48 h-48 mb-4' src={data.avatar_url} alt="githubProfilePic" />

        <div className='bg-gray-100 p-4 rounded-lg shadow-md text-left text-xl'>
          <p><strong>id:</strong> {data.id}</p>
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>Name:</strong> {data.name || 'N/A'}</p>
          <p><strong>Location:</strong> {data.location || 'N/A'}</p>
          <p><strong>Bio:</strong> {data.bio || 'N/A'}</p>
          <p><strong>Blog:</strong> <a className='text-blue-500 hover:text-blue-800' href={"https://deepak-chavan.netlify.app/"} target="_blank" rel="noopener noreferrer">{data.blog || 'N/A'}</a></p>
          <p><strong>Github URL:</strong> <a className='text-blue-500 hover:text-blue-800' href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a></p>
        </div>
      </div>
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/deepakchavan18')
  return response.json()

}
