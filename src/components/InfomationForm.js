import React, { useState } from 'react'
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap'
import { userService } from '../services/user.service'
import { useHistory } from 'react-router-dom'

const InfomationForm = () => {
  const [stdId, setStdId] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (fullName && stdId) {
      setLoading(true)
      setError(false)
      userService
        .updateUserInfo(fullName, stdId)
        .then(() => history.push('/'))
        .catch(() => {
          setError(true)
          setLoading(false)
        })
    }
  }

  return (
    <Container>
      {loading && (
        <div className="d-flex justify-content-center mb-3">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      <div className=" d-flex justify-content-center">
        <Card className="w-50 px-4 py-3 border-custom-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMSSV">
              <Form.Label>MSSV</Form.Label>
              <Form.Control
                type="text"
                value={stdId}
                onChange={(e) => setStdId(e.target.value)}
                placeholder="Nhập MSSV"
                className="border-custom-lg"
              />
              {submitted && !stdId && (
                <small className="text-danger">Cần nhập MSSV</small>
              )}
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ và tên"
                className="border-custom-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {submitted && !fullName && (
                <small className="text-danger">Cần nhập họ và tên</small>
              )}
            </Form.Group>

            <Button variant="outline-custom" type="submit" className="w-100">
              Xác nhận
            </Button>
            {error && <small className="text-danger">Có lỗi xin thử lại</small>}
          </Form>
        </Card>
      </div>
    </Container>
  )
}

export default InfomationForm
