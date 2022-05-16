import React, { useEffect, useState } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './Images/undraw_access_account_re_8spm.svg'
import {BiUserCircle} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(()=>{
    if (
       form.email !== "" &&
       form.password !==""
    ){
        setFormValid(true)
    } else {
        setFormValid(false)
    }
}, [form])

const handleChange = (e) => {
  setForm({
      ...form,
      [e.target.name]: e.target.value
  })
}

const submitHandler = (e) => {
  e.preventDefault()
  sessionStorage.setItem('adminDetails', JSON.stringify({...form}))
  
  toast.success(`Welcome, ${form.email}`)

  setTimeout(() => {
      window.location="/Dashboard"
  }, 5000);
 
}


  return (
    <div>
      
      <ToastContainer />

      <Container  id='container'>
     
        <div className='parent'>
          <Row className='row'>
            <Col sm className='form-div'>
              <div>
                <h3>Login</h3>
                <p>Sign in to your account</p>
              </div>
            <Form onSubmit={submitHandler}>
                <Form.Group>

                  <div className='email-div'>
                    <div className='email-icon-div'>
                      <BiUserCircle/>
                    </div>
                    <Form.Control required type="email" placeholder="Email" id="email-input" name="email" onChange ={handleChange} />
                  </div>

                  <div className='password-div'>
                    <div className='password-icon-div'>
                      <RiLockPasswordLine />
                    </div>
                    <Form.Control required type="password" placeholder="Password" id="password-input" name="password" onChange ={handleChange}/>
                  </div>
                      
                </Form.Group>

                <Button type="submit" id="btn" className={formValid? "valid": "not-valid"} >Login</Button>
              </Form>
            </Col>
            
            <Col sm  className='img-container'>
              <div className='img-div'>
                <img src={image} alt='login'/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Login