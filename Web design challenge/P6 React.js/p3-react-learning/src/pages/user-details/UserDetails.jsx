import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const [userData, setUserData] = useState()
  const {userId, userEmail} = useParams()

  const fetchUserData = async()=>{
    try{
      const res = await fetch('../../data/user-details.json')
      const data = await res.json()
      const user = data.users.find((value)=>{
        return value.id.toString() === userId &&  value.email === userEmail
      }) 
      setUserData(user)
      }catch(err){
        alert(err)
      }
  }

  useEffect(()=>{
    fetchUserData()
  },[])

  if(userData){
    console.log(userData)
  }

  return (
    <div>
      <h2 className='text-center m-1 p-1'>User Details</h2>
      {userData&&<>
      <div style={{maxWidth:'600px'}} className="card-text p-1 d-flex justify-center m-auto">
      <ul className='list-style-none m-1'>
      {Object.keys(userData).map((value)=>{
        return (
          <li key={value}>
            {value}:
          </li>
        )
      })}
      </ul>
      <ul className='list-style-none m-1'>
        {Object.values(userData).map((value)=>{
          return (
            <li>
              {typeof value === 'object' ? `${Object.values(value).join(',')}` :value}
            </li>
          )
        })}
      </ul>
      </div>
      </>}
    </div>
  )
}
