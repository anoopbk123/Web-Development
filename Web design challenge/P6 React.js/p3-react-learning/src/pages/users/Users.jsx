import React, { useEffect, useState } from 'react'
import BackToHome from '../../components/BackToHome'
import { Link } from 'react-router-dom';

export default function Users() {
  const [userData, setUserData] = useState([])

  const fetchUserData = async () => {
    try{
    const res = await fetch('data/user-details.json');
    const data = await res.json()
    setUserData(data.users)
    }catch(err){
      alert(err)
    }

  }

  useEffect(()=>{
    fetchUserData()
  },[])


  return (
    <div>
      <BackToHome/>
      <h2 className='text-center m-1 p-1'>
      Users
      </h2>
      <div className='m-1 p-1 d-flex gap-1 justify-evenly flex-wrap'>
        {
          userData&&<>
          {
            userData.map((value) => {{
              return (
              <div className='card-text'>
                <div>
                  ID: {value.id}
                </div>
                <div className='text-center'>
                  <div>
                    <Link to={`/user-details/${value.id}/${value.email}`}>{`${value.first_name} ${value.last_name}`}</Link>
                  </div>
                  <div>
                    Email: {value.email}
                  </div>
                  <div>
                  phone: {value.phone}
                  </div>
                  <div>
                    Registration Date: {value.registration_date}
                  </div>
                </div>
              </div>
              )
            }})
          }
          </>
        }
      </div>
      
    </div>
  )
}
