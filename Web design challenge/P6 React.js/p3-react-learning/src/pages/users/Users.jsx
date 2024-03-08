import React, { useEffect, useState } from "react";
import BackToHome from "../../components/BackToHome";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryFilter, setCountryFilter] = useSearchParams();
  const navigator = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await fetch("data/user-details.json");
      const data = await res.json();
      setUserData(data.users);
      const userCountries = [];
      data.users.forEach((value) => {
        if (!userCountries.includes(value.country)) {
          userCountries.push(value.country);
        }
      });
      setCountry(userCountries);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleCountryChange = (e) => {
    const { value: input } = e.target;
    setCountryFilter({
      country: input,
    });
  };

  return (
    <div>
      <BackToHome />
      <h2 className="text-center m-1 p-1">Users</h2>
      <div className="m-1">
        Select country:{" "}
        <select
          style={{ border: "1px solid red", padding: "0.5em" }}
          className="input"
          onChange={handleCountryChange}
          name=""
          id=""
        >
          <option value="">All</option>
          {country.map((v, index) => {
            return (
              <option
                selected={countryFilter.get("country") === v ? true : false}
                key={index}
                value={v}
              >
                {v}
              </option>
            );
          })}
        </select>
      </div>
      <div className="m-1 p-1 d-flex gap-1 justify-evenly flex-wrap">
        {userData &&
          userData
            .filter((value) => {
              if (countryFilter.get("country")) {
                return countryFilter.get("country") === value.country;
              } else {
                return true;
              }
            })
            .map((value, index) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigator(`/user-details/${value.id}/${value.email}`, {state:value})
                }
                key={index}
                className="card-text"
              >
                <div>ID: {value.id}</div>
                <div className="text-center">
                  <div>
                    <div>{`${value.first_name} ${value.last_name}`}</div>
                  </div>
                  <div>Email: {value.email}</div>
                  <div>Phone: {value.phone}</div>
                  <div>Country: {value.country}</div>
                  <div>Registration Date: {value.registration_date}</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
