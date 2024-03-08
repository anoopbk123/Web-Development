import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import './UserDetails.css'

export default function UserDetails() {
  const [userData, setUserData] = useState();
  const { userId, userEmail } = useParams();
  const navigator = useNavigate();
  const { state, pathname } = useLocation();
  console.log("state", state, "pathname", pathname);

  const fetchUserData = async () => {
    console.log("fetchUserData run");
    try {
      const res = await fetch("../../data/user-details.json");
      const data = await res.json();
      const user = data.users.find((value) => {
        return value.id.toString() === userId && value.email === userEmail;
      });
      setUserData(user);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (state) {
      setUserData(state);
    } else {
      fetchUserData();
    }
  }, []);

  if (userData) {
    console.log(userData);
  }

  return (
    <div>
      <h2 className="text-center m-1 p-1">User Details</h2>
      {userData && (
        <div className='m-1'>
          <div
            style={{ maxWidth: "600px" }}
            className="card-text p-1 d-flex justify-center m-auto"
          >
            <ul className="list-style-none m-1">
              {Object.keys(userData).map((value) => {
                return <li key={value}>{value}:</li>;
              })}
            </ul>
            <ul className="list-style-none m-1">
              {Object.values(userData).map((value) => {
                return (
                  <li>
                    {typeof value === "object"
                      ? `${Object.values(value).join(",")}`
                      : value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className="m-1">
      <div className="card-text m-auto" style={{ maxWidth: "600px" }}>
      <nav className="text-center m-1">
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", color: "blue" }}
          className="card-text m-1"
          to="" end
        >
          Address
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", color: "blue" }}
          className="card-text m-1"
          to="phone"
        >
          Phone
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", color: "blue" }}
          className="card-text m-1"
          to="registration-date"
        >
          Registration Date
        </NavLink>
      </nav>
      <div className="outlet text-center m-auto" style={{border:'2px solid',maxWidth: "600px"}}>
        <Outlet context={userData} />
      </div>
      </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => navigator('/users')}
          className="btn-primary warning m-1"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
