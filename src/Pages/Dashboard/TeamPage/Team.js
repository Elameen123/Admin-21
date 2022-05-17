import React, {useEffect} from 'react';
import './Team.css'

const Team = () => {
  const teamAPI = "https://fakerapi.it/api/v1/persons?_quantity=10";
  console.log(teamAPI);

  useEffect(() => {
      fetch(teamAPI).then(response => response.json()).then(data => console.log(data))
  }, [])
  
  return (
    <div>
      <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="head">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">Clock in/out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>radio-button</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default Team