import React from 'react'
import { useEffect, useState } from "react"
import Dashboard from "../../../Component/SideNav/Dashboard";
import {Table} from "react-bootstrap"
import './Client.css';

const url = ' https://fakerapi.it/api/v1/companies?_quantity=8'

function Client() {
  const [loading,setLoading] = useState(true)
  const [CusInfo,setCusInfo] = useState({})
  // const [value,setValue] = useState(0)

  const fetchInfo = async ()=>{
    const response = await fetch(url)
    const info = await response.json()
    setCusInfo(info.data)
    setLoading(false)
    console.log(info.data)
  }

useEffect(()=>{
  fetchInfo()
},[])

if(loading){
  return(
    <section className="">
      <h1>....Loading.....</h1>
    </section>
  )
}
// const {name,email,phone,contact,image} = CusInfo[value]


  return (
    <section >
      <div className="contact-div">
        <Dashboard />
      
      <Table>
        <thead>
          <tr>
          <th>Full name</th>
          <th>email</th>
          <th>phone number</th>
          <th>gender</th>
          <th>image</th>
          </tr>
        </thead>
        <tbody>
          {
            CusInfo ? CusInfo.map((CusInfo, idx) => (
              <tr>
                <td>{CusInfo.name}</td>
                <td>{CusInfo.email}</td>
                <td>{CusInfo.phone}</td>
                <td>{CusInfo.contact.gender}</td>
                <td><img src={CusInfo.image} alt="cusInfo" width={60}/></td>
              </tr> 
            )) : null
          }
      
        </tbody>
      </Table>
      </div> 
    </section>
  );
}

export default Client;
