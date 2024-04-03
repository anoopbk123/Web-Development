import React, { useEffect, useState } from "react";
import axios from 'axios'
import './PromotionForm.css'

export default function PromotionForm() {
  //form data
  const [formData, setFormData] = useState({
    promotionName: "",
    promotionPrice: "",
    promotionDescription: "",
    promotionImage:null
  });
  const [promotionData, setPromotionData] = useState([]);
  const [editData, setEditData] = useState(null)
  const handleChange = (e) => {
    // console.log(e.target)
    const {name, value, type, files} = e.target
    setFormData((prev)=>{
        return{
            ...prev,
            [name]:type === 'file' ? files[0] : value
        }
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(formData.promotionImage)
    if(formData.promotionImage === null){
      return alert('please choose image')
    }
    try{
    const response = await axios.post('http://localhost:4000/promotion/create',formData,{
      headers:{'content-type':'multipart/form-data'}
    })
    const data = response.data
    if(data.status){
      alert(data.message)
      setFormData({
        promotionName: "",
        promotionPrice: "",
        promotionDescription: "",
        promotionImage:null
      })
      fetchPromotions()
    }
    else{
      alert(data.message)
    }
    }
    catch(err){
      alert(err.message)
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

//edit data

  const handleEdit = (value)=>{
    const {_id, name, price, description} = value
    setEditData(value)
  }
  const handleCancel = () =>{
    setEditData(null)
  }
//edit data change
const handleEditChange=(e)=>{
  // console.log('edit change', e.target)
  const {name, value} = e.target
  // console.log(name, value)
  setEditData((previousData)=>{
    return{
      ...previousData,
      [name]: value
    }
  })
}
const handleEditSubmit = async (e)=>{
  e.preventDefault()
  // console.log('editdaat',editData)
  try{
    const response = await axios.put('http://localhost:4000/promotion/edit',editData)
    const data = response.data
    if(data&&data.status){
      alert(data.message)
      fetchPromotions()
      setEditData(null)
    }
    else if(!data.status){
      alert(data.message)
    }
  }
  catch(err){
    alert(err)
  }
}

// delete

const handleDelete = async (id, name, image)=>{
  const confirmation = confirm("Are you sure to delete the promotion "+name)
  if(confirmation){
    try{
      const res = await axios.delete(`http://localhost:4000/promotion/delete/${id}`)
    const data = res.data
    if(data.status){
      fetchPromotions()
      alert(data.message)
    }
    else{
      alert(data.message)
    }
    }
    catch(err){
      alert(err)
    }
  }
}


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
        <label>
          Promotion Picture{" "}
          <input type="file"
          value={promotionData.promotionImage}
          onChange={handleChange}
            name="promotionImage"
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
          <table style={{margin:'10px auto'}} align="center" border={3}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {
              promotionData.map(value=>(
                <tr>
                  <td>{value._id}</td>
                  <td><img width={'200'} src={`http://localhost:4000/${value.image}`} alt="" /></td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.description}</td>
                  <td><button style={{backgroundColor:'yellow'}} onClick={()=>{handleEdit(value)}}>Edit</button></td>
                  <td><button style={{backgroundColor:'red'}} onClick={()=>{handleDelete(value._id, value.name, value.image)}}>Delete</button></td>
                </tr>
              ))
            }
            </tbody>
          </table>
        :
        <div>No promotions</div>
        }
        {/* editData */}
        {editData&&<div className="edit-form-modal">
          <form onSubmit={handleEditSubmit}>
           <div>
        <label>
          Promotion ID{" "}
          <input
            value={editData._id}
            type="text"
            name="_id"
            disabled
          />
        </label>
        </div>
        <div>
        <label>
          Promotion Name{" "}
          <input
            value={editData.name}
            type="text"
            name="name"
            disabled
          />
        </label>
        </div>
        <div>
        <label>
          Promotion Price{" "}
          <input
          onChange={handleEditChange}

            value={editData.price}
            type="text"
            name="price"
          />
        </label>
        </div>
        <div>
        <label>
          Promotion Description{" "}
          <textarea
          onChange={handleEditChange}
            value={editData.description}
            name="description"
          />
        </label>
        </div>
        <div>
            <button>Submit</button>
        </div>
        <div>
            <input onClick={handleCancel} value='cancel' type="button" />
        </div>
      </form>
        </div>}
      </div>
    </div>
  );
}
