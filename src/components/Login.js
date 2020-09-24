import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap'

import { authActions } from '../store/actions/authActions'
import { userService } from '../services/user.service'

const Login = () => {
  const loggingIn = useSelector((state) => state.authentication.loggingIn)
  const dispatch = useDispatch()
  const [userCode, setUserCode] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const history = useHistory()

  useEffect(() => {
    dispatch(authActions.logout())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (userCode) {
      dispatch(authActions.login(userCode))
        .then(() => userService.getUserInfo())
        .then((userInfo) => {
          if (!userInfo.fullName && !userInfo.stdId) {
            history.push('/info-form')
          } else {
            history.push('/')
          }
        })
        .catch(() => {
          history.push('/')
        })
    }
  }

  return (
    <Container>
      <div className=" d-flex justify-content-center">
        <Card className="w-50 px-4 py-3 border-custom-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCode">
              <Form.Label>Code</Form.Label>
              <Form.Control
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                type="text"
                placeholder="Nhập code"
                className="border-custom-lg"
              />
              {submitted && !userCode && (
                <small className="text-danger mt-4">Cần nhập code</small>
              )}
            </Form.Group>
            <Button
              type="submit"
              variant="outline-custom"
              className="custom-transition w-100"
            >
              {loggingIn && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Xác nhận
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  )
}

export default Login
