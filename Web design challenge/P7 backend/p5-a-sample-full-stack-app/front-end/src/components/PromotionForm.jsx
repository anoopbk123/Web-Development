import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function PromotionForm() {
  const [formData, setFormData] = useState({
    promotionName: "",
    promotionPrice: "",
    promotionDescription: "",
  });
  const [promotionData, setPromotionData] = useState(null)
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
    const response = await axios.post('http://localhost:4000/promotion/create',formData)
    const data = response.data
    if(data.status){
      alert(data.message)
      setFormData({
        promotionName: "",
        promotionPrice: "",
        promotionDescription: "",
      })
      fetchPromotions()
    }
    else{
      alert(data.message)
    }
    }
    catch(err){
      alert(err)
    }
  }

  const fetchPromotions = async ()=>{
    try{
      const response = await axios.get('http://localhost:4000/promotion/promotions')
      const data = response.data
      if(data){
        if(data.status){
          setPromotionData(data.promotions)
        }
      }
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPromotions()
  },[])

  return (
    <div>
      <h2>Promotion Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Promotion Name{" "}
          <input
          onChange={handleChange}
            value={formData.promotionName}
            type="text"
            name="promotionName"
          />
        </label>
        </div>
        <div>
        <label>
          Promotion Price{" "}
          <input
          onChange={handleChange}

            value={formData.promotionPrice}
            type="text"
            name="promotionPrice"
          />
        </label>
        </div>
        <div>
        <label>
          Promotion Description{" "}
          <textarea
          onChange={handleChange}
            value={formData.promotionDescription}
            name="promotionDescription"
          />
        </label>
        </div>
        <div>
            <button>Submit</button>
        </div>
      </form>
      <div style={{margin:'50px'}}>
        <h2>Promotions</h2>
        {promotionData.length?
          <table style={{margin:'10px auto', border:'2px solid'}} align="center" border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {
              promotionData.map(value=>(
                <tr>
                  <td>{value._id}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.description}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        :
        <div>No promotions</div>
        }
      </div>
    </div>
  );
}
