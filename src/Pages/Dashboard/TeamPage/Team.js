import React, {useEffect, useState} from 'react';
import './Team.css'
import { Form } from 'react-bootstrap';
import Header from '../../../Component/Header/Header'
import Dashboard from '../../../Component/SideNav/Dashboard';

const Team = () => {
  const teamAPI = "https://fakerapi.it/api/v1/persons?_quantity=10";
  console.log(teamAPI);

  const [teamMembers, setteamMembers] = useState([])

  const danger = "btn btn-outline-danger"
  const success = "btn btn-outline-success"
  const active = "active"
  const inactive = "inactive"

  const [buttonValue, setbuttonValue] = useState(false)

  const [buttonState, setbuttonState] = useState(false)

const changeStatus = () => {
  setbuttonValue(!buttonValue);
  setbuttonState(!buttonState);
}

  useEffect(() => {
      fetch(teamAPI).then(response => response.json()).then(data => setteamMembers(data.data))
  }, [])
  
  console.log(teamMembers)
  return (
    <div className='header'>
      {/* <Header /> */}
      <div className='parent-div'>
      <Dashboard />
      <div className="table-responsive">
      <table className="table table-hover header">
        <thead className="head">
          <tr>
          <th scope="col">id</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Gender</th>
            <th scope="col" className='status'>Status</th>
            <th scope="col">Clock in/out</th>
          </tr>
        </thead>
        <tbody>

          {
            teamMembers ? teamMembers.map((teamMember, idx) => (

              <tr>
              <td>{teamMember.id}</td> 
              <td>
                  <img src={teamMember.image} alt='Image' className='image'></img>
                  <span className='first-name'>
                  {teamMember.firstname}
                  </span>
                  <span>
                  {teamMember.lastname}
                  </span>
              </td>
              <td>{teamMember.email}</td>
              <td>{teamMember.phone}</td>
              <td>{teamMember.gender}</td>
              <td>
              <button type="button" class={ buttonState ? success : danger }>{buttonValue ? active : inactive}</button>
              </td>
              <td>
              <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  className='switch'
                  onClick={changeStatus}
                />
              </Form>
              </td>
              </tr>

            )) : null
          }
        </tbody>
      </table>
      </div>
      </div>
      
      
    </div>
  )
}

export default Team