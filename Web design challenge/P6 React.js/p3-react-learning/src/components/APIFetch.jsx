import React, { useEffect, useState } from "react";

export default function APIFetch() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([])

  const URL = "https://the-one-api.dev/v2/book";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((dat) => {
        // console.log(dat.docs)
        setData(dat.docs);
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    // const docs = data.map((value)=>{
    //     return value.name
    // })
    const filterName = data.filter((value)=>{
        let smallValue = value.name.toLowerCase()
        let smallInput = searchInput.toLowerCase()
        return smallValue.includes(smallInput)
        // console.log('filter',searchInput.toLowerCase())
    })
    setFilterData(filterName)
  };

  return (
    <>
      <div className="gap-1 m-1 p-1 d-flex">
        <div>
          <input
            value={searchInput}
            onChange={handleInputChange}
            placeholder="search book"
            style={{ border: "2px solid" }}
            className="input"
            type="text"
          />
        </div>
        <div>
          <button className="btn-primary">search</button>
        </div>
      </div>

       <div className="m-1 p-1">
       {filterData&&<>
       <ul>
        {
            filterData.map((value)=>{
                console.log('book-filter',value)
                return (
                    <li>
                        {value.name}
                    </li>
                )
            })
        }
       </ul>
       </>}
       </div>


      <div className="m-1 p-1">
        <h2>Book List</h2>
        <ul>
          {data && (
            <>
              {data.map((value) => {
                return <li>{value.name}</li>;
              })}
            </>
          )}
        </ul>
      </div>
    </>
  );
}
