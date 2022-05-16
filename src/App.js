import { useEffect, useState } from "react"
import './index.css';

const url = ' https://fakerapi.it/api/v1/companies?_quantity=1'

function App() {
  const [loading,setLoading] = useState(true)
  const [CusInfo,setCusInfo] = useState({})
  const [value,setValue] = useState(0)

  const fetchInfo = async ()=>{
    const response = await fetch(url)
    const info = await response.json()
    setCusInfo(info.data)
    setLoading(false)
    console.log(info.data)
  }

useEffect(()=>{
  fetchInfo()
},[value])

if(loading){
  return(
    <section className="">
      <h1>....Loading.....</h1>
    </section>
  )
}
const {name,email,phone,contact,image} = CusInfo[value]


  return (
    <section >
      <table>
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
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{contact.gender}</td>
          <td><img src={image} alt="" width={60}/></td>
        </tr>
        </tbody>
      </table>
       
    </section>
  );
}

export default App;
