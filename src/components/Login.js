import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { LoginChecker } from "./LoginChecker"
import { PushToDbState } from "./PushToDbState"





export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  

  

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      const loginTest = await LoginChecker(emailRef.current.value)
      console.log(loginTest)
      if (!loginTest){
        try{
          await login(emailRef.current.value, passwordRef.current.value)
          await PushToDbState(emailRef.current.value)
          history.push("/")
        }catch{
        setError('login Failed please check username/password')
        }
      } 
      else {
        throw 'Please logout the other device to login'
      }
    } catch(error){

      setError(error)
    } 

    setLoading(false)
  }
  
  return (
    
    <div style={{ width:'100%', height:'100%', marginTop:'5%' }}> 

      <div className="d-flex justify-content-center align-content-center flex-wrap" >
      <Card className="w-50">
          <Card.Body>
              <h2 >Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                  <br/>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <br/>
                  <Button disabled={loading} type="submit">
                  Log In
                  </Button>
              </Form>
          </Card.Body>
      </Card>
      
      </div>
        
    </div>

    
       
  )

  
}
