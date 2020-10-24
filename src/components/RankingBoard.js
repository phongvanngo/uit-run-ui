import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { secondToMinutesAndSeconds, compareUser } from '../utils'
import { rankingService } from '../services/ranking.service'

const RankingBoard = () => {
  const [searchQuery, setSearchQuery] = useState('') // Filter data hiển thị trên table dựa trên MSSV
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)

    // Gọi fake API
    rankingService.getBoard().then((fetchedUsers) => {
      const users = fetchedUsers
        .sort(compareUser)
        .map((user, rank) => ({ ...user, rank })) // Sắp xếp và thêm thuộc tính rank
      setUsers(users)
      setLoading(false)
    })
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  }

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {
        !loading && users.length === 0 && (
          <div className="d-flex justify-content-center">
            <h3>Hiện tại chưa có ai làm bài thi</h3>
          </div>
          
        )
      }
      {users.length > 0 && (
        <>
          <div className="d-flex justify-content-center">
            <h2>Bảng xếp hạng</h2>
          </div>
          <Form>
            <Form.Group controlId="formGroupSearch">
              <Form.Label className="font-weight-bold">
                Tra cứu kết quả
              </Form.Label>
              <Form.Control
                value={searchQuery}
                onChange={handleChange}
                type="text"
                placeholder="Nhập MSSV cần tìm"
                className="border-custom-lg"
              />
            </Form.Group>
          </Form>
          <Table bordered hover className="text-center">
            <thead className="bg-gradient-custom text-white">
              <tr>
                <th>Hạng</th>
                <th>MSSV</th>
                <th>Điểm</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {users && users
                .filter((user) => {
                  if (searchQuery.length < 8 && searchQuery.length > 0) {
                    return user.std_id.includes(searchQuery)
                  }
                  return true
                })
                .map((user) => (
                  <tr key={user.std_id+user.rank}>
                    <td className="w-auto font-weight-bold font-italic">
                      <span
                        className={
                          'rank ' +
                          (user.rank === 0 ? 'first-rank' : '') +
                          (user.rank === 1 ? 'second-rank' : '') +
                          (user.rank === 2 ? 'third-rank' : '')
                        }
                      >
                        {user.rank + 1}.{' '}
                      </span>
                    </td>
                    <td>{user.std_id}</td>
                    <td>{user.score}</td>
                    <td>{secondToMinutesAndSeconds(user.time)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default RankingBoard
